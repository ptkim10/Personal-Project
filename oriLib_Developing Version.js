/**
 * @oriLib - Android default design
 *
 * @author ptkim10
 */
 
 	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
 	
 	function dip2px(ctx, dips) {
 return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
 }
 	
 const oriLib = {
 	
 	    Button : function(location, text, background, do) {
 	    	 			var button = new android.widget.Button(ctx);
 	    	 			button.setText(text[0]);
 	        button.setTextSize(text[1]);
 	    	 			button.setTextColor(text[2]);
 	    	 			 button.setBackgroundDrawable(background);
 	    	 			 button.showAtLocation(location);
 	    	 				button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
					eval(do);
					}
					}));
				}
 	
    	Text : function(location, text) {
    		var textView = new android.widget.TextView(ctx);
    		 textView.showAtLocation(location);
    		 textView.setText(text[0]);
    		 textView.setTextSize(text[1]);
 	    	 			textView.setTextColor(text[2]);
    	}
    	
    	Image : function(location, path, size) {
    		var imageView = new android.widget.ImageView(ctx);
    		 imageView.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    		 imageView.setImageBitmap(new android.graphics.BitmapFactory.decodeFile(path));
    		 imageView.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    		 imageView.showAtLocation(location);
    		 imageView.setWidth(dip2px(ctx,size[0]));
    		 imageView.setHeight(dip2px(ctx,size[1]));
    	}
 	
 	
 }
 
 /**
  - oriLib
  
  */
