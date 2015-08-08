/**
 *
 * @Single Command - version 1.0 (developing)
 *
 *
 *
 * @author ptkim10
 *
 *
 */
 
 
 
 
 var infHealth = false;
 var insMine = false;
 var insKill = false;
 var setX = null;
 var setY = null;
 var setZ = null;
 
 
 function procCmd(cmd) {
 	var string = cmd.split(' ');
 	
 	
 	/*  -Command "time" isn't work present version-
 	
 	if(string[0] == "time") {
 		if(string[2] == "day") {
 	 		clientMessage("시간이 1000으로 설정되었습니다.");
 			 Level.setTime(1000);
 		 }
 		if(string[2] == "night") {
 			 clientMessage("시간이 13000으로 설정되었습니다.");
 		 Level.setTime(13000);
 		}
 		if(string[1] == "set") {
 			 Level.setTime(string[2]);
 			 clientMessage("시간이 "+string[2]+"으로 설정되었습니다.");
 		}
 		
 		if(string[1] == "add") { Level.setTime(Level.getTime()+string[2]);
 		 clientMessage("시간이 "+string[2]+"만큼 추가되었습니다.");
  	}
 	}
 	*/
 	
 	if(string[0] == "fly") {
 		if(string[1] == "true") {
 	  Player.setCanFly(true);
 	  clientMessage("날 수 있게 설정되었습니다.");
 	 }
 	 if(string[1] == "false") {
 	  Player.setCanFly(false);
 	  clientMessage("날 수 없게 설정되었습니다.");
 	 }
 	}
 	
 	if(string[0] == "health") {
 		if(string[1] == "min") {
 		 Player.setHealth(1);
 		 clientMessage("체력이 최소로 설정되었습니다.");
 		}
 	 if(string[1] == "max") {
 		 Player.setHealth(20);
 		 clientMessage("체력이 최대로 설정되었습니다.");
 		}
 		if(string[1] == "infinite") {
 		 if(string[2] == "true") {
 		  infHealth = true;
 		  clientMessage("체력이 무한으로 설정되었습니다.");
 		 }
 		 if(string[2] == "false")
 		  infHealth = false;
 		}
 	}
 	
 	
 	if(string[0] == "noclip") {
 		if(string[1] == "true") {
 		 Entity.setCollisionSize(getPlayerEnt(), -1, -1);
 		 clientMessage("블럭을 통과할 수 있게 설정하였습니다.");
 		}
 		 
 		if(string[1] == "false") {
 			 Entity.setCollisionSize(getPlayerEnt(), 1, 2);
 		 clientMessage("블럭을 통과할 수 없게 설정하였습니다.");
 		}
 	}
 	 
 	if(string[0] == "kill") {
 	 Player.setHealth(0);
 	 clientMessage("자살하였습니다.");
 	}
 	
 	if(string[0] == "item") {
 	 Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 1, string[1], string[3], string[2]);
 	 clientMessage("아이템을 획득했습니다.");
 	}
 	
 	if(string[0] == "explode") {
 	 explode(getPlayerX(), getPlayerY(), getPlayerZ(), string[1]);
 	 clientMessage(string[1]+"만큼 폭파하였습니다.");
 	}
 	
 if(string[0] == "instantmine") {
 	 if(string[1] == "true") {
 	  insMine = true;
 	  clientMessage("모든 것을 즉시 부술 수 있습니다.");
 	 }
 	 if(string[1] == "false") {
 	  insMine = false;
 	  clientMessage("즉시 부술 수 없습니다.");
 	 }
 	}
 	  
 	  
 	if(string[0] == "setspawn") {
 	 Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ());
 	 clientMessage("스폰지역으로 설정되었습니다.");
 	}
 	 
 	if(string[0] == "instantkill") {
 	 if(string[1] == "true") {
 	  insKill = true;
 	  clientMessage("즉시 죽일 수 있습니다.");
 	 }
 	 if(string[1] == "false") {
 	  insKill = false;
 	  clientMessage("즉시 죽일 수 없습니다.");
 	 }
 	}
 	 
 	if(string[0] == "gamemode") {
 		if(string[1] == "1") {
 		 Level.setGameMode(1);
 		 clientMessage("게임모드가 크리에이티브로 설정되었습니다.");
 		}
 	 if(string[1] == "0") {
 		 Level.setGameMode(0);
 		 clientMessage("게임모드가 서바이벌로 설정되었습니다.");
 		}
 	}
 	 
 	if(string[0] == "spawn") {
 	 clientMessage("엔티티를 "+string[2]+"만큼 스폰하였습니다.");
 		for(var loop2 = 0;loop2<string[2];loop2++) {
 		  Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), string[1]);
 		}
 	}
 	 
 if(string[0] == "ptkim10") {
 		clientMessage("이스터에그를 발견하셨습니다!");
 	toast(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),"이스터에그를 발견하셨습니다!");
 		alert(com.mojang.minecraftpe.MainActivity.currentMainActivity.get());
 	}
 	 
 	 
 	//*
 	}
 	
 	
 	function modTick() {
 		if(infHealth)
 		 Player.setHealth(20);
 		
 	}
 	
 function useItem(x, y, z) {
  	if(insMine)
  	 Level.destroyBlock(x, y, z, true);

 }

 function attackHook(attacker, victim) {
	if(attacker == getPlayerEnt() && insKill == true)
	 Entity.setHealth(victim, 0);

}

function alert(ctx) {
	try{
  ctx.runOnUiThread(new java.lang.Runnable({run:function(){
  var vv=new android.webkit.WebView(ctx);
  vv.loadUrl("http://mblogthumb4.phinf.naver.net/20150109_31/ptkim10_1420812021703lfg7o_GIF/KakaoTalk_20150109_225133426.gif?type=w420");
  
  var alertDlg = new android.app.AlertDialog.Builder(ctx);
  alertDlg.setView(vv);
  var dialog = alertDlg.create();
  var lp = new android.view.WindowManager.LayoutParams();
  lp.copyFrom(dialog.getWindow().getAttributes());
  lp.width = ctx.getWindowManager().getDefaultDisplay().getWidth();
  lp.height = ctx.getWindowManager().getDefaultDisplay().getHeight();
  dialog.show();
  var window = dialog.getWindow();
  }
 }));
}
 catch(err){
 print(err);
 }
}

function toast(ctx,msg) {
 ctx.runOnUiThread(new java.lang.Runnable({run: function(){
 android.widget.Toast.makeText(ctx, msg, android.widget.Toast.LENGTH_LONG).show();

 }
 }
 ));
}


/**
 *
 * @Single_Command
 */
