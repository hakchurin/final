import Backbone from 'backbone';
import gameView from './game';
import loginInfo from './login';
import signUpInfo from './signUp';
import $ from 'jquery';
import footerView from './footer';
import endGameModal from './endGameModal';
import startGameModal from './startGameModal';



function resetCanvas() {
  var canvas = document.getElementById("screen");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


  const Router = Backbone.Router.extend({
    routes: {
      login: 'loginfunction',
      signUp: 'signUpFunction',
      game: 'gamefunction',
      leaderboard: 'leaderboardFunction',
      '/*': 'redirectFunction'
    },
    loginfunction: function(){
      $('#container').empty(gameView).append(loginInfo());
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      resetCanvas();
    },
    signUpFunction: function(){
      console.log('signup func');
      $('#container').empty().append(signUpInfo());
    },
    leaderboardFunction: function(){
      $('#container').empty().append(highScoreView());

    },
    gamefunction: function(){
      console.log('hi');
      $('#container').empty().append(footerView().append(startGameModal()).append(endGameModal()));
      gameView();
    },
    redirectFunction: function(){
      window.location.hash= 'game';
    }
  })

let router = new Router();

export default router;
