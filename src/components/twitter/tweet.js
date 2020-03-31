const Twit = require("twit");
const cron = require("node-cron");
const axios = require("axios");
var config = require("./config");
var T = new Twit(config);

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
	setTimeout(() => {
		let status = `
			${state[i].loc} has total ${state[i].confirmedCasesIndian+state[i].confirmedCasesForeign} cases,
			with ${state[i].deaths} deaths, while ${state[i].discharged} patients have been discharged so far.
			More on corona-go.info #coronavirus #IndiaFightsCorona 
			`;
		tweet(status);
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
			//console.log(err);
		} else {
			//console.log(data);
		}
	}
};

module.exports={main};