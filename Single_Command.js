/**
 *
 * @Single Command - Developing version
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
 	 clientMessage("자신을 죽였습니다.");
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
 	 Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerX)());
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




/**
 *
 * @Single_Command
 */
