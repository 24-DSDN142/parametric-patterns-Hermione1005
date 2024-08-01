  function wallpaper_background() {
  background(220, 255, 200); //light honeydew green colour
   // Three-digit hex RGB notation.
   
   fill('#fae');
 
   describe('A pink square with a black outline.');
 
}
  function my_symbol() { 
    fill(new Color(255, 204, 153)); // 浅橙色
        g2d.fillOval(150, 150, 100, 100);

        // 画眼睛
        g2d.setColor(Color.WHITE);
        g2d.fillOval(170, 180, 20, 20);
        g2d.fillOval(210, 180, 20, 20);
        
        g2d.setColor(Color.BLACK);
        g2d.fillOval(175, 185, 10, 10);
        g2d.fillOval(215, 185, 10, 10);

        // 画鼻子
        g2d.setColor(Color.PINK);
        g2d.fillOval(195, 200, 10, 10);

        // 画嘴巴
        g2d.setColor(Color.BLACK);
        g2d.drawLine(200, 210, 190, 220);
        g2d.drawLine(200, 210, 210, 220);

        // 画耳朵
        g2d.setColor(new Color(255, 204, 153)); // 浅橙色
        int[] xPointsLeftEar = { 150, 170, 160 };
        int[] yPointsLeftEar = { 150, 150, 120 };
        g2d.fillPolygon(xPointsLeftEar, yPointsLeftEar, 3);

        int[] xPointsRightEar = { 250, 230, 240 };
        int[] yPointsRightEar = { 150, 150, 120 };
        g2d.fillPolygon(xPointsRightEar, yPointsRightEar, 3);
        
        // 画脸颊腮红
        g2d.setColor(new Color(255, 182, 193)); // 浅粉色
        g2d.fillOval(155, 190, 15, 15);
        g2d.fillOval(230, 190, 15, 15);
    }


    import javax.swing.*;
import java.awt.*;
import java.awt.geom.Ellipse2D;

public class CuteCatFace extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        
        // 抗锯齿
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
        
        // 设置猫脸中心位置
        int centerX = 200; // 固定中心X坐标
        int centerY = 200; // 固定中心Y坐标

        // 画猫脸
        g2d.setColor(new Color(255, 204, 153)); // 浅橙色
        g2d.fill(new Ellipse2D.Double(150, 150, 100, 100)); // 猫脸

        // 画眼睛
        g2d.setColor(Color.WHITE);
        g2d.fill(new Ellipse2D.Double(170, 180, 20, 30)); // 左眼
        g2d.fill(new Ellipse2D.Double(210, 180, 20, 30)); // 右眼
        
        g2d.setColor(Color.BLACK);
        g2d.fill(new Ellipse2D.Double(175, 190, 10, 15)); // 左眼瞳孔
        g2d.fill(new Ellipse2D.Double(215, 190, 10, 15)); // 右眼瞳孔

        // 画鼻子
        g2d.setColor(Color.PINK);
        g2d.fill(new Ellipse2D.Double(195, 200, 10, 10)); // 鼻子

        // 画嘴巴
        g2d.setColor(Color.BLACK);
        g2d.drawLine(200, 210, 190, 220); // 左半边嘴
        g2d.drawLine(200, 210, 210, 220); // 右半边嘴

        // 画耳朵
        g2d.setColor(new Color(255, 204, 153)); // 浅橙色
        int[] xPointsLeftEar = { 150, 170, 160 };
        int[] yPointsLeftEar = { 150, 150, 120 };
        g2d.fillPolygon(xPointsLeftEar, yPointsLeftEar, 3); // 左耳朵

        int[] xPointsRightEar = { 250, 230, 240 };
        int[] yPointsRightEar = { 150, 150, 120 };
        g2d.fillPolygon(xPointsRightEar, yPointsRightEar, 3); // 右耳朵
        
        // 画脸颊腮红
        g2d.setColor(new Color(255, 182, 193)); // 浅粉色
        g2d.fill(new Ellipse2D.Double(155, 200, 20, 10)); // 左脸颊
        g2d.fill(new Ellipse2D.Double(225, 200, 20, 10)); // 右脸颊
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Cute Cat Face");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 400);
        frame.add(new CuteCatFace());
        frame.setVisible(true);
    }
}
