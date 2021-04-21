type User = {
    name: string;
    address: {
        city: string;
        state: string;
    }
}
//retorn welcome text of site
function createWelcomeMessage(user: User) {
    return `boas vindas, ${user.name}. Cidade: ${user.address.city} - ${user.address.state}!`
}

const welcomeMessage = createWelcomeMessage({
    name: 'Lon Carl',
    address: {
        city: 'Brasília',
        state: 'DF'
    }
})