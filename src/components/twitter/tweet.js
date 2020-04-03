const Twit = require("twit");
const cron = require("node-cron");
const axios = require("axios");
var config = require("./config");
var T = new Twit(config);

cron.schedule("* */3 * * *", () => {
	main();
});

const main = async () => {
	let data = await axios.get(
		"https://api.covid19india.org/data.json"
	);
	tweetHandler(data.statewise, 0);
};

const tweetHandler = (state_data, i) => {
	setTimeout(() => {
		let status = `
			${state_data[i].state=="Total"?"India":state_data[i].state} has total ${state_data[i].confirmed} ${state_data[i].confirmed==1?'case':'cases'},
			with ${state_data[i].deaths} ${state_data[i].deaths==1?'death':'deaths'}, while ${state_data[i].recovered} ${state_data[i].deaths==1?'patient':'patients'} have recovered so far.
			More on https://corona-go.info #coronavirus #IndiaFightsCorona 
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