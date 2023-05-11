print('Start creating gdatabase ###############')
db = db.getSiblingDB('api_HomeFlix_Filmes')
db.createUser({
    user: 'api_HomeFlix',
    pwd:   'api_HomeFlix',
    roles:[{role: 'readWrite', db: 'api_HomeFlix_Filmes'}],
})