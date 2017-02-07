
 /*
        "frontends" :
        {
            "8000" :
            {
                "entryPoints" : ["http", "https"],
                "backend" : "8000",
                "routes" :
                {
                    "1" :
                    {
                        "rule" : "Host: 8000.bhlowe.com"
                    }
                },
                "priority" : 0
            },
       "backends" :
        {
            "8000" :
            {
                "servers" :
                {
                    "1" :
                    {
                        "url" : "http://localhost:8000",
                        "weight" : 0
                    }
                },
                "loadBalancer" :
                {
                    "method" : "wrr"
                }
            },

*/
function getNameHTML(json, name)
{
    return "<strong>" + name + "</strong>";
}

function getFrontEndHTML(json, name)
{
    var backends = json.file.backends;
    var fe = json.file.frontends[name];
    var be = backends[fe.backend];
    var html = "";
    var entryPoints = Object.values(fe.entryPoints);

    var epList = "";

    for (var key in fe.entryPoints)
    {
        var e = fe.entryPoints[key];
        if (epList.length > 0)
            epList += " ";
        epList += e;
    }

    for (var route in fe.routes)
    {
        if (html.length > 0)
            html += "<br>";
        var rule = fe.routes[route].rule;

        if (rule.startsWith("Host: "))
        {
            var ruleHTML = "";
            var host = rule.substr(6);
            var proto = "";
            if (entryPoints.indexOf("https") != -1)
                proto = "https";
            else if (entryPoints.indexOf("http") != -1)
                proto = "http";

            if (proto.length > 0)
            {
                // standard http and https entrypoints
                ruleHTML += "<a href='" + proto + "://" + host + "'>" + host + "</a>";
            }
            else
            {

                for (var index in fe.entryPoints)
                {
                    if (ruleHTML.length > 0)
                        ruleHTML += ", ";
                    var protocol = fe.entryPoints[index];
                    var link = protocol + "://" + host; // https://example.domain.com
                    ruleHTML += "<a href='" + link + "'>" + link + "</a>";
                }
            }

            html += ruleHTML;
        }
        else
        {
            html += rule;
        }
    }

    // html = "<span class='label label-primary ng-binding'>"+epList+"</span>"+html;

    return html;
}

function getBackEndHTML(json, backEndName)
{
    var be = json.file.backends[backEndName];
    var html = "";
    if (be)
    {
        var count = Object.keys(be.servers).length;

        for (var key in be.servers)
        {
            var server = be.servers[key];
            if (html.length > 0)
                html += "<br>\n";
            var u = server.url;
            var w = server.weight;
            html += "<a href='" + u + "'>" + u + "</a>";
            if (count > 1)
                html += " " + w;
        }
    }

    return html;
}

function getFrontEnd(backEndName, json)
{
    for (var key in json.file.frontends)
    {
        var fe = json.file.frontends[key];
        if (fe.backend === backEndName)
            return fe;
    }
    return null;
}

function getHTML(json)
{
    filterProviders(json);

    var html = "";
    for (var index in json.table)
    {
        var row = json.table[index];
        html += row['name'];
        html += " ";
        html += row['frontend'];
        html += " ";
        html += row['backend'];
        html += "<br>\n";
    }

    return html;
}

function filterProviders(json)
{
    // console.log(json);
    var file = json.file;
    var table = [];

    var html = "";
    var frontends = json.file.frontends;
    var backends = json.file.backends;
    // display frontends
    for (var key in frontends)
    {
        var fe = json.file.frontends[key];
        var row =
        {
            name : getNameHTML(json, key),
            frontend : getFrontEndHTML(json, key),
            backend : getBackEndHTML(json, fe.backend)
        };
        table.push(row);
    }

    // display any backends without a frontend.
    for (var key in backends)
    {
        if (!getFrontEnd(key, json) == null)
        {
            var row =
            {
                name : getNameHTML(json, key),
                frontend : "",
                backend : getBackEndHTML(json, key)
            };
            table.push(row);
        }
    }
    json['table'] = table;
    return json;

}

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState === XMLHttpRequest.DONE)
        {
            if (xhr.status === 200)
            {
                if (success)
                    success(JSON.parse(xhr.responseText));
            }
            else
            {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


