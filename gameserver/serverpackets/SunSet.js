var ServerPacket = require("./ServerPacket.js");

function SunSet() {
	this._packet = new ServerPacket(10);
	this._packet.writeC(0x29);

	return this._packet.getBuffer();
}

module.exports = SunSet;