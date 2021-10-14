"use strict";

let raisedMoney = '100732';
let Flipper = function() {
	function Flipper(node, currentAmount, nextAmount) {
		this.isFlipping = false;
		this.duration = 600;
		this.flipNode = node;
		this.frontNode = node.querySelector(".front");
		this.backNode = node.querySelector(".back");
		this.setFrontAmount(currentAmount);
		this.setBackAmount(nextAmount);
	}
	Flipper.prototype.setFrontAmount = function (time) {
		this.frontNode.dataset.number = time;
	};
	Flipper.prototype.setBackAmount = function (time) {
		this.backNode.dataset.number = time;
	};
	Flipper.prototype.flipDown = function (currentAmount, nextAmount) {
		const _this = this;

		if (this.isFlipping) {
			return false;
		}

		this.isFlipping = true;
		raisedMoney = (parseInt(raisedMoney) + 1).toString();
		this.setFrontAmount(currentAmount);
		this.setBackAmount(nextAmount);
		this.flipNode.classList.add("running");
		setTimeout(function() {
			_this.flipNode.classList.remove("running");
			_this.isFlipping = false;
			_this.setFrontAmount(nextAmount);
		}, this.duration);
	};
	return Flipper;
}();


const flips = document.querySelectorAll(".flip-item");
const nextAmountStr = (parseInt(raisedMoney) + 1).toString();

const Flippers = Array.from(flips).map(function (flip, i) {
	return new Flipper(flip, raisedMoney[i], nextAmountStr[i]);
});

setInterval(function () {
	const nextAmountStr = (parseInt(raisedMoney) + 1).toString();

	for (let i = 0; i < Flippers.length; i++) {
		if (raisedMoney[i] === nextAmountStr[i]) {
			continue;
		}
		Flippers[i].flipDown(raisedMoney[i], nextAmountStr[i]);
	}
}, 1000);