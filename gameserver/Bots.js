let classes = require("./../data/classes");
let characterTemplatesData = require("./../data/characterTemplates");
let Packet = require("./Packet");
let Bot = require("./Bot");

class Bots {
	constructor(server) {
		this._bots = [];
		this._server = server
		this._idFactory = this._server.idFactory;
		this._characterTemplates = this._serialization(characterTemplatesData);
		this._classes = [classes.fighter, classes.mage, classes.elvenFighter, classes.elvenMage, classes.darkFighter, classes.darkMage, classes.orcFighter, classes.orcMage, classes.dwarvenFighter];
	}

	create(count) {
		let x = -72100;
		let y = 257500;
		let z = -3080;

		for(let i = 0; i < count; i++) {
			let bot = new Bot();
			let sign = Math.random() < 0.5 ? -1 : 1;
			let classId = this._classes[Math.floor(Math.random() * this._classes.length)];
			let character = this._characterTemplates[classId];
			let raceId;
			
			switch(this._classes.indexOf(classId)) {
				case 0:
				case 1:
					raceId = 0;

					break;
				case 2:
				case 3:
					raceId = 1;
					
					break;
				case 4:
				case 5:
					raceId = 2;
					
					break;
				case 6:
				case 7:
					raceId = 3;
					
					break;
				case 8:
					raceId = 4;
					
					break;
			}
			
			bot.server = this._server;
			bot.objectId = this._idFactory.getNextId();;
			bot.characterName = "bot" + i;
			bot.title = "bot";
			bot.gender = Math.floor(Math.random() * 2);
			bot.hairStyle = 1;
			bot.hairColor = 1;
			bot.face = 0;
			bot.online = true;
			bot.bot = true;

			bot.classId = classId;
			bot.className = character.className;
			bot.raceId = raceId;

			bot.accuracy = character.accuracy;
			bot.critical = character.critical;
			bot.evasion = character.evesion;
			bot.runSpeed = character.runSpeed;
			bot.walkSpeed = character.walkSpeed
			bot.swimsSpeed = character.swimsSpeed;
			bot.maximumLoad = character.maximumLoad;

			bot.pAtk = character.pAtk;
			bot.pDef = character.pDef;
			bot.mAtk = character.mAtk;
			bot.mDef = character.mDef;
			bot.pSpd = character.pSpd;
			bot.mSpd = character.mSpd;
			
			bot.x = Math.floor(Math.random()*(500 * sign)) + x;
			bot.y = Math.floor(Math.random()*(500 * sign)) + y;
			bot.z = z;
			
			bot.maleMovementMultiplier = character.maleMovementMultiplier;
			bot.maleAttackSpeedMultiplier = character.maleAttackSpeedMultiplier;
			bot.maleCollisionRadius = character.maleCollisionRadius;
			bot.maleCollisionHeight = character.maleCollisionHeight;

			bot.femaleMovementMultiplier = character.femaleMovementMultiplier;
			bot.femaleAttackSpeedMultiplier = character.femaleAttackSpeedMultiplier;
			bot.femaleCollisionRadius = character.femaleCollisionRadius;
			bot.femaleCollisionHeight = character.femaleCollisionHeight;

			bot.items = [];

			this._bots.push(bot);
		}

		return this._bots;
	}

	get() {
		return this._bots;
	}

	_serialization(data) {
		let result = {};

			for(let i = 0; i < data.length; i++) {
				result[data[i].classId] = data[i];
			}

		return result;
	}
}

module.exports = Bots;