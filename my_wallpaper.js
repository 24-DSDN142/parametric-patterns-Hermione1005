//your parameter variables go here!
let rect_width  = 30;
let rect_height = 30;


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

  ellipse(75, 50, 50, 60);
  ellipse(125, 50, 50, 60);
  ellipse(50, 100, 60, 50);
  ellipse(150, 100, 60, 50);
  ellipse(75, 150, 50, 60);
  ellipse(125, 150, 50, 60);
  ellipse(100, 100, 70, 70);

  fill(255,204,0);
  ellipse(100, 100, 70, 70)


}

 
  


