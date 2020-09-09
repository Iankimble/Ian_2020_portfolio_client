// function to send emails to me
//**set up server and sendgrid and push to github-> heroku */

// function to retrieve blog data
//**set up strapi blog and push to github-> heroku */

// function for retrieving twitter data
//**may need to set up on backend */
const twitterFeed = () => {
    let client = new Twitter({
      key='',
      secret='',
      token ='',
      tokentSecret='',
    });

    let params ={screen_name:'nodejs'}
    client.get('statuses/user_timeline', params, (error,tweets, res)=>{
        if(!error){
            console.log(tweets)
        }
    })
  };