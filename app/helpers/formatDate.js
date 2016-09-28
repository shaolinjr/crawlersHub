// Module para formatar a data da forma que nós queremos

var formatDate = {};

formatDate.dateToText = function (date){
    // usando templateString pra melhorar a escrita do código:
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    // return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
  }

module.exports = formatDate;
