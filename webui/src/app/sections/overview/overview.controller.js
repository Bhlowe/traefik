'use strict';

/** @ngInject */
function OverviewController($scope, $interval, $log, $http)
{

    var vm = this;

    $log.info("new OverviewController");

    function getNameHTML(json, name)
    {
        return name;
    }

    function getFrontEndHTML(json, name)
    {
        var fe = json.file.frontends[name];
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

    function filterProviders(json)
    {
        var table = [];
		var row;
        var frontends = json.file.frontends;
        var backends = json.file.backends;
        // display frontends
        for (var fkey in frontends)
        {
            var fe = json.file.frontends[fkey];
            row =
            {
                name : getNameHTML(json, fkey),
                frontend : getFrontEndHTML(json, fkey),
                backend : getBackEndHTML(json, fe.backend)
            };
            table.push(row);
        }

        // display any backends without a frontend.
        for (var bkey in backends)
        {
            if (!getFrontEnd(bkey, json) == null)
            {
                row =
                {
                    name : getNameHTML(json, bkey),
                    frontend : "",
                    backend : getBackEndHTML(json, bkey)
                };
                table.push(row);
            }
        }
        json['table'] = table;
        return json;

    }

    /**
     * Load data
     *
     * @param {Object} health Health data from server
     */
    function loadData(providers)
    {

        $log.info("loadData: ");
        $log.info(providers.data);
        vm.overview = filterProviders(providers.data);
        $log.info(vm.overview.table);
    }

    /**
     * Action when load datas failed
     *
     * @param {Object} error Error state object
     */
    function erroData(error)
    {
        vm.health = {};
        $log.error("erroData: " + error);
    }

    $log.info("starting... getting providers");

    $http.get('/assets/providers.json')
    .then(loadData, erroData);

    $log.info("called get providers");

    // Providers.get(loadData, erroData);


    // Stop auto refresh when page change
    $scope.$on('$destroy', function ()
    {
        // $interval.cancel(intervalId);
    }
    );

}

module.exports = OverviewController;