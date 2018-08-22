

const request = $.ajax({
    url: 'data.json',
    method: 'GET'
  });

request
    .done((data) => { 
        let mainF1 = {data: _.slice(data.section[0].data, 0, 2) }; 
        let mainF2 = {data: _.slice(data.section[0].data, 2, 4) }; 
        let mainF3 = {data: _.slice(data.section[0].data, 4) };
        let brasil = data.section[1];   
        let mundo = data.section[2];  

        let mainf1List = _.template($('#listLg').html()); 
        let mainf2List = _.template($('#listMd').html()); 
        let mainf3List = _.template($('#listSm1').html()); 
        let brasilList = _.template($('#listSm2').html()); 
        let mundoList = _.template($('#listSm2').html()); 


        $('.js-mainf1-list').html(mainf1List(mainF1)).removeClass('is-invisible');
        $('.js-mainf2-list').html(mainf2List(mainF2)).removeClass('is-invisible');
        $('.js-mainf3-list').html(mainf3List(mainF3)).removeClass('is-invisible');
        $('.js-brasil-list').html(brasilList(brasil)).removeClass('is-invisible');
        $('.js-mundo-list').html(mundoList(mundo)).removeClass('is-invisible');
    });