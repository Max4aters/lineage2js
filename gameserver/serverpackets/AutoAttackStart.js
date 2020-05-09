let ServerPacket = require("./ServerPacket");

function AutoAttackStart(objectId) {
	this._packet = new ServerPacket(5);
	this._packet.writeC(0x3b)
		.writeD(objectId)
		
	return this._packet.getBuffer();
}

module.exports = AutoAttackStart;