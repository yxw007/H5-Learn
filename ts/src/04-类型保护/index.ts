//-------------------------------------------------------------------------
interface Fish {
	swiming: string,
}

interface Bird {
	fly: string,
	leg: number
}

function isBird(animal: Fish | Bird): animal is Bird {
	return 'fly' in animal && 'leg' in animal
}

function getAniaml(animal: Fish | Bird) {
	if (isBird(animal)) {
		console.log("isBird");
	} else {
		console.log("Fish");
	}
}

getAniaml({ "swiming": "x" });
//output: Fish
//-------------------------------------------------------------------------

interface WarningButton {
	class: 'warning'
}
interface DangerButton {
	class: 'danger'
}
function createButton(button: WarningButton | DangerButton) {
	if (button.class == 'warning') {
		console.log("Warning Button");
	} else {
		console.log("Warning Button");
	}
}
createButton({ class: 'warning' });
//output: Warning Button

//-------------------------------------------------------------------------

const addPrefix = (num?: number) => {
	num = num || 1.1;
	function prefix(fix: string) {
		//利用?.进行保护
		return fix + num?.toFixed()
	}
	return prefix('xx');
}
console.log(addPrefix());

//-------------------------------------------------------------------------

interface ICircle {
	kind: 'circle',
	r: number
}
interface IRant {
	kind: 'rant',
	width: number,
	height: number
}
interface ISquare {
	kind: 'square',
	width: number
}
type Area = ICircle | IRant | ISquare
const isAssertion = (obj: never) => { }
const getArea = (obj: Area) => {
	switch (obj.kind) {
		case 'circle':
			return 3.14 * obj.r ** 2
		default:
			// 不可抵达的断言保护, 此分支逻辑必须实现
			return isAssertion(obj);
	}
}
//-------------------------------------------------------------------------
