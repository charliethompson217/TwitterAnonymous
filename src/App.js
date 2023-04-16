import {Amplify, API } from 'aws-amplify';
import awsconfig from './aws-exports';
import {React, useRef} from 'react';
Amplify.configure(awsconfig);
API.configure(awsconfig);



function App() {
  const tweetRef = useRef()
  async function sendTweet() {
    try {
      const data = tweetRef.current.value;
      const response = await API.post('********', '*********', { body: data });
      console.log(response);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
    tweetRef.current.value = "";
  }
  return (
    
    <div>
      <input
        ref={tweetRef}
        type="text"
        style={{
          width: "100%",
          minHeight: "100px",
          fontSize: "16px",
          lineHeight: "24px",
          padding: "12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          outline: "none",
          resize: "vertical",
          fontFamily: "Arial, sans-serif",
        }}
      />
      <button onClick={sendTweet}>send tweet</button>
    </div>
  );
}

export default App;
