class Ball{
  
  constructor(x, y, size) {
    
    this.x = x;
    this.y = y;
    this.s = size;
    
  }
  
  update() {
   
    this.s = map(this.y, 495, 210, 64, 32);
    this.x = map(this.y, /*경기장 끝*/, /*경기장 끝*/, /*경기장 왼쪽*/, /*경기장 ㄹ오른쪽*/);
    
  }
  
}