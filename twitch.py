import requests
import json
import time
import datetime

start = time.time()
while True:
	header={'Client-ID':###'}
	getSource = requests.get("https://api.twitch.tv/kraken/streams/evo", headers=header)
	text = json.loads(getSource.text)
	print(text["stream"]["viewers"]);
	with open('twitchviewers.txt', 'a') as view:
		view.write(str(text["stream"]["viewers"]) + ' Time:' + str(datetime.datetime.now()) + '\n') 
		#make sure to print date so as to know when each game is starting
	time.sleep(60.0 - ((time.time() - start)%60.0))
