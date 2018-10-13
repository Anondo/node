var fs = require('fs');



function get(id = null)
{
  var data = fs.readFileSync('db.json');
  json = JSON.parse(data);
  if(id)
  {
    var found = false;
    for(var i = 0;  i < json.length; i++)
    {
      if (json[i].id == id)
      {
        json = json[i];
        found = true;
        break;
      }
    }
    if(!found)
      json = {detail : 'Not Found'};
  }

  return json;
}
function post(msg)
{
  fs.readFile('db.json' , function(err , data){
      var json = JSON.parse(data);
      msg.id = json.length + 1;
      json.push(msg);

      fs.writeFile("db.json" , JSON.stringify(json) , (err) => {
        if(err)
          throw err;
      });

  });
  return {id: msg.id ,  name:  msg.name};

}

function deletes(id)
{
  var data = fs.readFileSync('db.json');
  var json = JSON.parse(data);

  for(var i = 0; i < json.length; i++)
  {
    if(json[i].id == id)
    {
      var deleted_data = json.splice(i , 1)[0];

      fs.writeFile('db.json' , JSON.stringify(json) ,(error) => {
          if(error)
            throw error;
      });

      return deleted_data;
    }

  }
  return {detail : 'Not Found'};
}

function put(id , data)
{
    var json = JSON.parse(fs.readFileSync('db.json'));
    for(var i = 0; i < json.length; i++)
    {
      if(json[i].id == id)
      {
        data.id = id;
        json[i] = data;

        fs.writeFile('db.json' , JSON.stringify(json)  ,(error) => {
          if(error)
            throw error;
        });
        return json[i];
      }

    }
    return {detail : 'Not Found'};
}


module.exports.post_data = post;
module.exports.get_data = get;
module.exports.delete_data = deletes;
module.exports.put_data = put;
