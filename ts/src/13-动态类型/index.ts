/**
 * 说明：根据类型，动态获取类型配置
 */

const amazon = {
	"a-amazon": "amazon",
	"b-amazon": "b2"
} as const;

const azure = {
	"a-azure": "a1",
	"b-azure": "b2"
} as const;

const google = {
	"a-google": "a1",
	"b-google": "b2"
} as const;

type Engines = "amazon" | "azure" | "google"

export type targetLanguageMapNames = {
	"amazon": keyof typeof amazon,
	"azure": keyof typeof azure,
	"google": keyof typeof google,
}

export type ValuesOf<T> = T[keyof T];
type targetLanguageMapValues = {
	amazon: ValuesOf<typeof amazon>;
	azure: ValuesOf<typeof azure>;
	google: ValuesOf<typeof google>;
};

// type AL = targetLanguageMapValues["amazon"];
// let al: AL = "";

type KeysOfTarget<T extends keyof targetLanguageMapNames> = targetLanguageMapNames[T];

export type TranslateOptions<T extends Engines> = {
	from?: KeysOfTarget<T> | "auto";
	to: KeysOfTarget<T> | targetLanguageMapValues[T];
	engine?: T;
}

export type EngineTranslateOptions<T extends Engines> = Omit<TranslateOptions<T>, "engine">;

export type Engine = {
	name: string;
	translate: <T extends Engines>(text: string | string[], opts: EngineTranslateOptions<T>) => Promise<string[]>;
};

class Translator {
	constructor() {
	}
	translate<T extends Engines>(options: TranslateOptions<T>) {
	}
}

let translator = new Translator();
translator.translate({
	engine: "amazon",
	to: ""
})

