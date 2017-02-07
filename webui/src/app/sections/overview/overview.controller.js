'use strict';


/** @ngInject */
function OverviewController($scope, $interval, $log, Providers) {

  var vm = this;
	$log.info("OverviewController");
  vm.providers = {
    "file": {
      "backends": {
        "8000": {
          "servers": {
            "1": {
              "url": "http://localhost:8000",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "au": {
          "servers": {
            "1": {
              "url": "http://trov.:8080",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "books": {
          "servers": {
            "1": {
              "url": "http://192.168.0.196",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "bt": {
          "servers": {
            "1": {
              "url": "http://192.168.0.90:8001",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "default": {
          "servers": {
            "1": {
              "url": "http://localhost:8010",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "free": {
          "servers": {
            "1": {
              "url": "https://localhost:8433",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "gb": {
          "servers": {
            "1": {
              "url": "http://trov.:8081",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "minecraft": {
          "servers": {
            "1": {
              "url": "http://192.168.0.90:8080",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "nextrtc": {
          "servers": {
            "1": {
              "url": "http://localhost:8433",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "osh": {
          "servers": {
            "1": {
              "url": "http://docker.:8181",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "siteproxy": {
          "servers": {
            "1": {
              "url": "http://192.168.0.206:8010",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "solar": {
          "servers": {
            "1": {
              "url": "http://solar.",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "syn": {
          "servers": {
            "1": {
              "url": "https://syn.:5001",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "torrent": {
          "servers": {
            "1": {
              "url": "http://192.168.0.90:8001",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "webrtc": {
          "servers": {
            "1": {
              "url": "http://192.168.0.226:8080",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        },
        "zabbix": {
          "servers": {
            "1": {
              "url": "http://zabbix",
              "weight": 0
            }
          },
          "loadBalancer": {
            "method": "wrr"
          }
        }
      },
      "frontends": {
        "8000": {
          "entryPoints": ["http", "https"],
          "backend": "8000",
          "routes": {
            "1": {
              "rule": "Host: 8000.bhlowe.com"
            }
          },
          "priority": 0
        },
        "au": {
          "entryPoints": ["http", "https"],
          "backend": "au",
          "routes": {
            "1": {
              "rule": "Host: au.bhlowe.com"
            }
          },
          "priority": 0
        },
        "books": {
          "entryPoints": ["http", "https"],
          "backend": "books",
          "routes": {
            "1": {
              "rule": "Host: books.bhlowe.com"
            }
          },
          "priority": 0
        },
        "bt": {
          "entryPoints": ["http", "https"],
          "backend": "bt",
          "routes": {
            "1": {
              "rule": "Host: bt.bhlowe.com"
            }
          },
          "priority": 0
        },
        "default": {
          "entryPoints": ["http", "https"],
          "backend": "default",
          "routes": {
            "1": {
              "rule": "Host: bhlowe.com"
            }
          },
          "priority": 0
        },
        "free": {
          "entryPoints": ["http", "https"],
          "backend": "free",
          "routes": {
            "1": {
              "rule": "Host: free.bhlowe.com"
            }
          },
          "priority": 0
        },
        "gb": {
          "entryPoints": ["http", "https"],
          "backend": "gb",
          "routes": {
            "1": {
              "rule": "Host: gb.bhlowe.com"
            }
          },
          "priority": 0
        },
        "minecraft": {
          "entryPoints": ["http", "https"],
          "backend": "minecraft",
          "routes": {
            "1": {
              "rule": "Host: minecraft.bhlowe.com"
            }
          },
          "priority": 0
        },
        "nextrtc": {
          "entryPoints": ["http", "https"],
          "backend": "nextrtc",
          "routes": {
            "1": {
              "rule": "Host: nextrtc.bhlowe.com"
            }
          },
          "priority": 0
        },
        "osh": {
          "entryPoints": ["http", "https"],
          "backend": "osh",
          "routes": {
            "1": {
              "rule": "Host: osh.bhlowe.com"
            }
          },
          "priority": 0
        },
        "siteproxy": {
          "entryPoints": ["http", "https"],
          "backend": "siteproxy",
          "routes": {
            "1": {
              "rule": "Host: siteproxy.bhlowe.com"
            }
          },
          "priority": 0
        },
        "solar": {
          "entryPoints": ["http", "https"],
          "backend": "solar",
          "routes": {
            "1": {
              "rule": "Host: solar.bhlowe.com"
            }
          },
          "priority": 0
        },
        "syn": {
          "entryPoints": ["http", "https"],
          "backend": "syn",
          "routes": {
            "1": {
              "rule": "Host: syn.bhlowe.com"
            }
          },
          "priority": 0
        },
        "torrent": {
          "entryPoints": ["http", "https"],
          "backend": "torrent",
          "routes": {
            "1": {
              "rule": "Host: torrent.bhlowe.com"
            }
          },
          "priority": 0
        },
        "webrtc": {
          "entryPoints": ["http", "https"],
          "backend": "webrtc",
          "routes": {
            "1": {
              "rule": "Host: webrtc.bhlowe.com"
            }
          },
          "priority": 0
        },
        "zabbix": {
          "entryPoints": ["http", "https"],
          "backend": "zabbix",
          "routes": {
            "1": {
              "rule": "Host: zabbix.bhlowe.com"
            }
          },
          "priority": 0
        }
      }
    }
  };

  /**
   * Load data
   *
   * @param {Object} health Health data from server
   */
  function loadData(providers) {

	  $log.info("loadData");

    // set data's view
    vm.providers = providers;
  }

  /**
   * Action when load datas failed
   *
   * @param {Object} error Error state object
   */
  function erroData(error) {
    vm.health = {};
    $log.error(error);
  }

  alert("overview");

  // first load
  // Health.get(loadData, erroData);

  // Auto refresh data
  var intervalId = $interval(function () {
    vm.providers = {
      "file": {
        "backends": {
          "8000": {
            "servers": {
              "1": {
                "url": "http://localhost:8000",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "au": {
            "servers": {
              "1": {
                "url": "http://trov.:8080",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "books": {
            "servers": {
              "1": {
                "url": "http://192.168.0.196",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "bt": {
            "servers": {
              "1": {
                "url": "http://192.168.0.90:8001",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "default": {
            "servers": {
              "1": {
                "url": "http://localhost:8010",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "free": {
            "servers": {
              "1": {
                "url": "https://localhost:8433",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "gb": {
            "servers": {
              "1": {
                "url": "http://trov.:8081",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "minecraft": {
            "servers": {
              "1": {
                "url": "http://192.168.0.90:8080",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "nextrtc": {
            "servers": {
              "1": {
                "url": "http://localhost:8433",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "osh": {
            "servers": {
              "1": {
                "url": "http://docker.:8181",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "siteproxy": {
            "servers": {
              "1": {
                "url": "http://192.168.0.206:8010",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "solar": {
            "servers": {
              "1": {
                "url": "http://solar.",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "syn": {
            "servers": {
              "1": {
                "url": "https://syn.:5001",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "torrent": {
            "servers": {
              "1": {
                "url": "http://192.168.0.90:8001",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "webrtc": {
            "servers": {
              "1": {
                "url": "http://192.168.0.226:8080",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          },
          "zabbix": {
            "servers": {
              "1": {
                "url": "http://zabbix",
                "weight": 0
              }
            },
            "loadBalancer": {
              "method": "wrr"
            }
          }
        },
        "frontends": {
          "8000": {
            "entryPoints": ["http", "https"],
            "backend": "8000",
            "routes": {
              "1": {
                "rule": "Host: 8000.bhlowe.com"
              }
            },
            "priority": 0
          },
          "au": {
            "entryPoints": ["http", "https"],
            "backend": "au",
            "routes": {
              "1": {
                "rule": "Host: au.bhlowe.com"
              }
            },
            "priority": 0
          },
          "books": {
            "entryPoints": ["http", "https"],
            "backend": "books",
            "routes": {
              "1": {
                "rule": "Host: books.bhlowe.com"
              }
            },
            "priority": 0
          },
          "bt": {
            "entryPoints": ["http", "https"],
            "backend": "bt",
            "routes": {
              "1": {
                "rule": "Host: bt.bhlowe.com"
              }
            },
            "priority": 0
          },
          "default": {
            "entryPoints": ["http", "https"],
            "backend": "default",
            "routes": {
              "1": {
                "rule": "Host: bhlowe.com"
              }
            },
            "priority": 0
          },
          "free": {
            "entryPoints": ["http", "https"],
            "backend": "free",
            "routes": {
              "1": {
                "rule": "Host: free.bhlowe.com"
              }
            },
            "priority": 0
          },
          "gb": {
            "entryPoints": ["http", "https"],
            "backend": "gb",
            "routes": {
              "1": {
                "rule": "Host: gb.bhlowe.com"
              }
            },
            "priority": 0
          },
          "minecraft": {
            "entryPoints": ["http", "https"],
            "backend": "minecraft",
            "routes": {
              "1": {
                "rule": "Host: minecraft.bhlowe.com"
              }
            },
            "priority": 0
          },
          "nextrtc": {
            "entryPoints": ["http", "https"],
            "backend": "nextrtc",
            "routes": {
              "1": {
                "rule": "Host: nextrtc.bhlowe.com"
              }
            },
            "priority": 0
          },
          "osh": {
            "entryPoints": ["http", "https"],
            "backend": "osh",
            "routes": {
              "1": {
                "rule": "Host: osh.bhlowe.com"
              }
            },
            "priority": 0
          },
          "siteproxy": {
            "entryPoints": ["http", "https"],
            "backend": "siteproxy",
            "routes": {
              "1": {
                "rule": "Host: siteproxy.bhlowe.com"
              }
            },
            "priority": 0
          },
          "solar": {
            "entryPoints": ["http", "https"],
            "backend": "solar",
            "routes": {
              "1": {
                "rule": "Host: solar.bhlowe.com"
              }
            },
            "priority": 0
          },
          "syn": {
            "entryPoints": ["http", "https"],
            "backend": "syn",
            "routes": {
              "1": {
                "rule": "Host: syn.bhlowe.com"
              }
            },
            "priority": 0
          },
          "torrent": {
            "entryPoints": ["http", "https"],
            "backend": "torrent",
            "routes": {
              "1": {
                "rule": "Host: torrent.bhlowe.com"
              }
            },
            "priority": 0
          },
          "webrtc": {
            "entryPoints": ["http", "https"],
            "backend": "webrtc",
            "routes": {
              "1": {
                "rule": "Host: webrtc.bhlowe.com"
              }
            },
            "priority": 0
          },
          "zabbix": {
            "entryPoints": ["http", "https"],
            "backend": "zabbix",
            "routes": {
              "1": {
                "rule": "Host: zabbix.bhlowe.com"
              }
            },
            "priority": 0
          }
        }
      }
    };
  }, 3000);

  // Stop auto refresh when page change
  $scope.$on('$destroy', function () {
    $interval.cancel(intervalId);
  });

}

module.exports = OverviewController;
