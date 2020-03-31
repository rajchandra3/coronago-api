const Twit = require("twit");
const cron = require("node-cron");
const axios = require("axios");
var config = require("./config");
var T = new Twit(config);
// axios
// 	.get("https://api.rootnet.in/covid19-in/stats/latest")
// 	.then(result => console.log(JSON.stringify(result.data)))
// 	.catch(err => {
// 		console.log(err);
// 	});

cron.schedule("* */3 * * *", () => {
	main();
});
const main = async () => {
	let values = await axios.get(
		"https://api.rootnet.in/covid19-in/stats/latest"
	);
	tweetHandler(values.data.data.regional, 0);
};
const tweetHandler = (state, i) => {
	console.log("received state", state);
	setTimeout(() => {
		let status = `Current status of ${state[i].loc}. Total number of Indian confirmed cases ${state[i].confirmedCasesIndian}, Foreign confirmed cases ${state[i].confirmedCasesForeign}. Total deaths ${state[i].deaths}. Total discharged ${state[i].discharged}`;
		tweet(status);
		console.log(status);
		console.log(i);
		if (i < state.length - 1) {
			tweetHandler(state, i + 1);
		}
	}, 1000 * 60);
};

const tweet = status => {
	const tweet = {
		status: status
	};
	T.post("statuses/update", tweet, tweeted);
	function tweeted(err, data, response) {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	}
};
