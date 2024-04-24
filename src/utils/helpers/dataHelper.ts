export function generateUserData(): any {
    const fullName = generateRandomFullName();
    const mail = generateRandomEmail(fullName);
    const cpf = generateCPF();

    return {
        fullName,
        mail,
        password: "Test@12345",
        accessProfile: "ADMIN",
        cpf,
        confirmPassword: "Test@12345"
    };
}

function generateRandomFullName(): string {
    const firstNameList = [
        "Lucas", "Isabella", "Enzo", "Manuela", "Sophia",
        "Arthur", "Valentina", "Bernardo", "Alice", "Heitor",
        "Laura", "Davi", "Helena", "Theo", "Eduarda",
        "Pedro", "Clara", "Gabriel", "Matheus", "Larissa",
        "Miguel", "Isabela", "Lucca", "Mariana", "Theodoro",
        "Giovanna", "Samuel", "Jonas", "Nicolas", "Maria",
        "Gustavo", "Heloisa", "Murilo", "Ana", "Felipe",
        "Luiza", "Rafaela", "Benjamin", "Henrique", "Isadora",
        "Yasmin", "Emanuelly", "Livia", "Bruno", "Daniel",
        "Isaac", "Gregory", "Vinicius", "Luiz", "Breno"
    ];

    const lastNameList = [
        "Oliveira", "Pereira", "Silva", "Santos", "Costa",
        "Lima", "Martins", "Almeida", "Ferreira", "Souza",
        "Rodrigues", "Carvalho", "Nunes", "Rocha", "Castro",
        "Barbosa", "Alves", "Cavalcanti", "Freitas", "Lopes",
        "Gomes", "Moraes", "Araujo", "Vieira", "Monteiro",
        "Correia", "Nascimento", "Azevedo", "Ramos", "Borges",
        "Duarte", "Fernandes", "Ribeiro", "Cardoso", "Pinto",
        "Barros", "Campos", "Mendes", "Moreira", "Dias",
        "Teixeira", "Figueiredo", "Pinheiro", "Testa", "Cruz",
        "Larangeira", "Viana", "Leal", "Xavier", "Siqueira"
    ];

    const randomFirstName = firstNameList[Math.floor(Math.random() * firstNameList.length)];
    const randomLastName = lastNameList[Math.floor(Math.random() * lastNameList.length)];
    return `${randomFirstName} ${randomLastName}`;
}

function generateRandomEmail(fullName: string): string {
    const [firstName, lastName] = fullName.split(" ");
    const firstNameWithoutAccents = removeAccents(firstName.toLowerCase());
    const lastNameWithoutAccents = removeAccents(lastName.toLowerCase());
    return `${firstNameWithoutAccents}.${lastNameWithoutAccents}@qacoders-treinamento.com`;
}

function removeAccents(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
}

function generateCPF(): string {
    const randomDigit = () => Math.floor(Math.random() * 10);

    const cpfDigits = Array.from({ length: 9 }, randomDigit);

    let sum = 0;
    for (let i = 10; i > 1; i--) {
        sum += cpfDigits[10 - i] * i;
    }
    const firstVerifierDigit = (sum * 10) % 11;
    cpfDigits.push(firstVerifierDigit === 10 ? 0 : firstVerifierDigit);

    sum = 0;
    for (let i = 11; i > 1; i--) {
        sum +=cpfDigits[11 - i] * i;
    }
    const secondVerifierDigit = (sum * 10) % 11;
    cpfDigits.push(secondVerifierDigit === 10 ? 0 : secondVerifierDigit);

    return cpfDigits.join('');
}