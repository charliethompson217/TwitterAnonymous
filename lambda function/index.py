import json
import datetime
import tweepy

def handler(event, context):
  client = tweepy.Client(
      consumer_key='**********************',
      consumer_secret='**********************',
      access_token='**********************',
      access_token_secret='**********************'
  )
  data = event['body']
  trimmed_data = data[1:-1]
  client.create_tweet(text=trimmed_data)
  current_time = datetime.datetime.now().time()
  body = {
      'message': 'Hello, the current time is ' + str(current_time),
      'data': data
  }
  response = {
      'statusCode': 200,
      'body': json.dumps(body),
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
  }
  return response