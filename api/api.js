var api = {
      getRovers() {

        var url = 'http://devsma.idefenc.com/api/field/reg'
        return fetch(url).then((res) => res.json());
      }

};

module.exports = api;
