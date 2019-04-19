module.exports = {
    // dragonTreasure: async (req, res) => {
    //   const treasure = await req.app.get('db').get_dragon_treasure(1);
    //   return res.status(200).send(treasure);
    // },

    // getUserTreasure: async (req, res) => {
    //     const treasure = await req.app.get('db').get_user_treasure([req.session.user.id]);
    //     return res.status(200).send(treasure);
    //   },

    addHouse: async (req, res) => {
        //Destructure treasureURL from req.body and id from req.session.user
        let {name, address, city, state, zipcode} = req.body;
        console.log("CONTROLLER:", name, address, city)
        // let {id} = req.session.user;
        
        const newHouse = await req.app.get('db')
        .add_house([name, address, city, state, zipcode]);
        return res.status(200).send(newHouse);
      },

      getHouses: async (req, res) => {        
        const getAllHouses = await req.app.get('db').get_all_houses();
        return res.status(200).send(getAllHouses);
      },          

  };