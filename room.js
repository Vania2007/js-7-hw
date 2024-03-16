let room = {
  name: "living room",
  width: 3,
  length: 5,
  height: 2.5,
  countOfWindows: 1,
  colorOfWall: "white",
  show: function () {
    console.log(
      `${this.name}\nWidth: ${this.width} m\nLength: ${this.length} m\nHeight: ${this.height} m\n Number of windows: ${this.countOfWindows}\nWall colour: ${this.colorOfWall}`
    );
  },
  area: function (width = 0, length = 0) {
    console.log(`${width * length} m²`);
  },
};
room.show();
room.area(room.width, room.length);
