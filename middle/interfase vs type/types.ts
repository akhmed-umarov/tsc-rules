type Config = {
	protocol: "http" | "https";
	port: 3000 | 3001;
};

type Role = {
	role: string;
};

//в тайпах так делать нельзя так как будет ошибка одного и того же названия, как тайп был создан таким он и останется 

type ConfigWithRole = Config & Role;

type ConfigWithRole2 = Config | Role; 	//интерфейсы не поддерживают создание нового интерфейса с помощью связи юнион типа двухдругих интерфейсов

const serverConfig: ConfigWithRole = {
	protocol: "https",
	port: 3001,
	role: "admin",
};

const startServer = (
	protocol: "http" | "https",
	port: 3000 | 3001
): "Server started" => {
	console.log(`Server started on ${protocol}://server:${port}`);

	return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port);


//зато типы можно использовать друг внутри друга а интерфейсы нет, то есть если нужно сделать типизацию отдельного свойства объекта
//как снизу показано в интерфейсах не вариант
type primer = 'test' | 'test2';

type primer2 = { 
	prime: primer
}