/**
 * 说明：根据类型，动态获取类型配置
 */

const amazon = {
	"a-amazon": "amazon",
	"b-amazon": "b2"
}
const azure = {
	"a-azure": "a1",
	"b-azure": "b2"
}
const google = {
	"a-google": "a1",
	"b-google": "b2"
}

type Engines = "amazon" | "azure" | "google"

export type LanguageMap = {
	"amazon": keyof typeof amazon,
	"azure": keyof typeof azure,
	"google": keyof typeof google,
}

type KeysOf<T extends keyof LanguageMap> = LanguageMap[T];

export type TranslateOptions<E extends Engines> = {
	from?: KeysOf<E> | "auto";
	to: KeysOf<E>;
	engine?: E;
}

export type EngineTranslateOptions<T extends Engines> = Omit<TranslateOptions<T>, "engine">;

export type Engine = {
	name: string;
	isValidOriginLanguage: (originLanguage: any) => boolean;
	isValidTargetLanguage: (targetLanguage: any) => boolean;
	translate: <T extends Engines>(text: string | string[], opts: EngineTranslateOptions<T>) => Promise<string[]>;
};

class Translator {
	private engines: Map<string, Engine>;
	constructor() {
		this.engines = new Map<string, Engine>();
	}
	translate<T extends Engines>(options: TranslateOptions<T>) {
	}
}

let translator = new Translator();

translator.translate({
	engine: "amazon",
	to: "a-amazon"
})

