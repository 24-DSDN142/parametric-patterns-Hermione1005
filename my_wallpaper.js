/**
 * HAND IN
 * code needs 1 if statement and 5 parameters
 */


//your parameter variables go here!

let cat_fur_color = "#ffffff";



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(220, 255, 200); //light honeydew green colour
   // Three-digit hex RGB notation.
   
   fill('#fae');
 
   describe('A pink square with a black outline.');
 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // 设置猫脸中心位置
  centerX = 100; // 固定中心X坐标
  centerY = 100; // 固定中心Y坐标

  // 画耳朵
  fill(80); // 浅橙色
  triangle(71, 110, 85, 53, 109, 75);
  triangle(169, 110, 135, 73, 160, 55);
  
  // face
  fill(cat_fur_color); // 浅橙色
  ellipse(120, 120, 100, 100); // 猫脸

  // eye
  fill(300);
  ellipse(100, 120, 20, 30); // L
  ellipse(140, 120, 20, 30); // R
  
  fill(50);
  ellipse(95, 118, 10, 15); // L
  ellipse(135, 118, 10, 15); // R
  
  fill(300)
  ellipse(93, 119, 3, 6); //highlight
  ellipse(133, 119, 3, 6);//highlight
  
  // 画鼻子
  fill('#fae');
  triangle(113, 130, 120, 140, 128, 130);// 鼻子

  // 画嘴巴
  //fill(50);
  line(120, 140, 115, 150); // 左半边嘴
  line(120, 140, 125, 150); // 右半边嘴
 
  //Left whiskers
  fill(50);
  line(55,110,80,120);
  line(55,130,80,130);
  line(57,150,80,140);

  //Right whiskers
  fill(50);
  line(150,110,180,120);
  
  //fillPolygon(xPointsLeftEar, yPointsLeftEar, 3); // 左耳朵

  //ellipse( 250, 230, 240 );
  //ellipse( 150, 150, 120 );
  
  // 画脸颊腮红
 // fill(255, 182, 193); // 浅粉色
 // ellipse(155, 200, 20, 10); // 左脸颊
 // ellipse(225, 200, 20, 10); // 右脸颊
}

 
  


