interface IConfig {
	protocol: "http" | "https";
	port: 3000 | 3001;
}

interface IRole {
	role: string;
}

//если нужен примитив или юнион тип то используйте тайп а не интерфейсы

//то есть при дописании IConfig у нас не меняется переменная IConfig а просто расширяется так как интерфейс будет только в TSC

//	удобно использовать со сторонними библиотеками когда вы импортируете какой то интерефейс а потом уже просто после его импорта расширяется его
interface IConfig { 
	date: Date
}

interface IConfigWithRole extends IConfig, IRole {}

const serverIConfig: IConfigWithRole = {
	protocol: "https",
	port: 3001,
	role: "admin",
	date: new Date()
};

const startIServer = (
	protocol: "http" | "https",
	port: 3000 | 3001
): "Server started" => {
	console.log(`Server started on ${protocol}://server:${port}`);

	return "Server started";
};

startIServer(serverIConfig.protocol, serverIConfig.port);


///	четыри различия то как создается = {} , то как расширяется в интерфейсе просто написать страое название интерфейса и все и то что интерфейс работает ток с объектами а тип с чем угодно,   и extends вместо & 

//интерфейсы работают только с объектами и не более того, то есть тайп может работать как с примитивными типами так и с примитивными литерльными типами (строго заданного формата типы которые)

