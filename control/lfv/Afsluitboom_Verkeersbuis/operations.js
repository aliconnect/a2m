get_bestuurbaar = function () {
							return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
						}
get_observeerbaar = function () {
							return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
						}
