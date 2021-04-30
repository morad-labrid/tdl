//----------------------------------------------------------------------------//
//SCRIPT POUR L'INSCRIPTION  -------------------------------------------------//
//----------------------------------------------------------------------------//
$('#registre').click(function() {
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var cpassword = $('#cpassword').val();

        if (username != '' && email != '' && password != '' && cpassword != '') { //VERIFIER QUE LES INPUT NE SONT PAS VIDE
            if (password.match(/[!,@,#,$,%,^,&,*,?,_,~,-,(,),+,=]/) && password.match(/[0-9]/)) { //VERIFIER QUE LE MOT DE PASSE CONTIENT DES CARACTERE SPECIEUX
                if (password == cpassword) { //VERIFIER SI LE MOT DE PASSE EST LA CONFIRMATION SONT IDENTIQUE
                    $.ajax({
                        url: 'api/reg.php',
                        method: 'POST',
                        data: {
                            username: username,
                            email: email,
                            password: password
                        },
                        success: function(data) {
                            if (data == 'ok') {
                                $(location).attr('href', 'index.php');
                            } else {
                                document.getElementById('error').innerHTML = "<li>" + JSON.parse(data) + "</li>";
                            }
                        },
                        error: function() {
                            alert("Erreur lors de l'inscription");
                        }
                    })
                } else {
                    document.getElementById('error').innerHTML = "<li>Les mots de passes ne correspondent pas</li>";
                    $('#cpassword').val('');
                    $('#cpassword').focus();
                }
            } else {
                document.getElementById('error').innerHTML = "<li>Le mots de passes doit contenir un caractere special et un chiffre</li>";
                $('#password').val('');
                $('#cpassword').val('');
                $('#password').focus();
            }
        } else {
            document.getElementById('error').innerHTML = "<li>Veuillez remplir tous les champs</li>";
        }
    })
    //----------------------------------------------------------------------------//
    //SCRIPT POUR LA CONNEXION  --------------------------------------------------//
    //----------------------------------------------------------------------------//
$('#login').click(function() {
        var username = $('#username').val();
        var password = $('#password').val();

        if (username != '' && password != '') { //VERIFIER QUE LES INPUT NE SONT PAS VIDE
            $.ajax({
                url: 'api/log.php',
                method: 'POST',
                data: {
                    username: username,
                    password: password
                },
                success: function(data) {
                    info = JSON.parse(data);
                    if (info.username == username) {
                        setCookie('user', info.id, 1);
                        $(location).attr('href', 'todo.php');
                    } else {
                        document.getElementById('error').innerHTML = "<li>" + JSON.parse(data) + "</li>";
                    }
                },
                error: function() {
                    alert("Erreur lors de l'inscription");
                }
            })
        } else {
            document.getElementById('error').innerHTML = "<li>Veuillez remplir tous les champs</li>";
        }
    })
    //----------------------------------------------------------------------------\\
    //SCRIPT POUR AJOUTER UNE MISSION  -------------------------------------------\\
    //----------------------------------------------------------------------------\\
    // var today = new Date();
    // dayUrgent = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 3);

// $(document).ready(function() {

//     $.ajax({ // POUR AFFICHER LES MISSION DE TODO
//         url: 'api/todo.php',
//         method: 'POST',
//         success: function(data) {
//             data = JSON.parse(data);
//             var countTodo = 0;
//             var countFreeTime = 0;
//             var countUrgent = 0;
//             data.forEach(element => {
//                 var dataDeadLine = new Date(element.deadLine);
//                 dataDeadLine = dataDeadLine.getFullYear() + '-' + (dataDeadLine.getMonth() + 1) + '-' + dataDeadLine.getDate();

//                 var dataDateCreat = new Date(element.deadLine);
//                 dataDateCreat = dataDateCreat.getDate() + '/0' + (dataDateCreat.getMonth() + 1) + '/' + dataDateCreat.getFullYear();

//                 var box = $('<div class="box" id="box' + element.id + '"></div><br>');
//                 var boxTitle = $('<div class="boxTitle"><h3>' + element.title + '</h3></div>');
//                 var form = $('<div class="task" id="task' + element.id + '" method="POST"><ul id="taskTodo' + element.id + '"></ul></div>');
//                 var boxContainer = $('<div class="boxContainer"><div><p>date de fin</p><p>' + dataDateCreat + '</p></div><div><p>tâches</p><p class="howMany' + element.id + '"></p></div><div class="arrow down' + element.id + '"><i class="fas fa-sort-down"></i></div></div>');
//                 // POUR AFFICHER LES MISSION TODO UNIQUEMENT
//                 if (dataDeadLine >= dayUrgent && element.tableto == 'todo') {
//                     $('.toDo .container').append(box);
//                     $('.toDo #box' + element.id).append(boxTitle);
//                     $('.toDo #box' + element.id).append(form);
//                     $('.toDo #box' + element.id).append(boxContainer);

//                     $.ajax({
//                         url: 'api/task.php',
//                         method: 'POST',
//                         data: { get: 'true' },
//                         success: function taskb(task) {
//                             task = JSON.parse(task);
//                             var x = 0;
//                             var xi = 0;
//                             for (let i = 0; i < task.length; i++) {
//                                 if (task[i].idMission == element.id) {
//                                     if (task[i].status == 0) {
//                                         var tasks = $('<li class="check" id="btn' + task[i].id + '"><button id="' + task[i].id + '"><i class="fas fa-times"></i></button> ' + task[i].description + '</li>')
//                                         $('#taskTodo' + element.id).append(tasks)
//                                     } else if (task[i].status == 1) {
//                                         var tasks = $('<li class="checked"><button id="' + task[i].id + '"><i class="fas fa-check"></i></button> ' + task[i].description + '</li>')
//                                         $('#taskTodo' + element.id).append(tasks)
//                                         xi++
//                                     }
//                                     x++
//                                 }
//                             }

//                             $('.toDo #task' + element.id).prepend('<p>vous avez ' + x + ' tâches pour ' + element.title + '</p>');
//                             $('.toDo .howMany' + element.id).prepend(xi + '/' + x);

//                             $('li button').click(function() {
//                                 var id = $(this).attr('id')

//                                 $.ajax({
//                                     url: 'api/task.php',
//                                     method: 'POST',
//                                     data: { id: id },
//                                     success: function(valide) {
//                                         if (valide == "ok") {
//                                             $('#btn' + id).remove();
//                                             $('#taskTodo' + element.id).append('<li class="checked"><button id="' + task[id].id + '"><i class="fas fa-check"></i></button> ' + task[id].description + '</li>');
//                                             console.log(element.id);
//                                         } else {
//                                             console.log(element.id);
//                                         }
//                                     },
//                                     error: function() {
//                                         alert("Erreur lors de l'inscription");
//                                     }
//                                 })
//                             })
//                         }
//                     })
//                     countTodo++;
//                 }
//                 // POUR AFFICHER LES MISSION IN FREE TIME UNIQUEMENT
//                 if (dataDeadLine >= dayUrgent && element.tableto == 'freeTime') {
//                     $('.progress .container').append(box);
//                     $('.progress #box' + element.id).append(boxTitle);
//                     $('.progress #box' + element.id).append(form);
//                     $('.progress #box' + element.id).append(boxContainer);
//                     $.ajax({
//                         url: 'api/task.php',
//                         method: 'POST',
//                         data: { get: 'true' },
//                         success: function(task) {
//                             task = JSON.parse(task);
//                             var x = 0;
//                             var xi = 0;
//                             for (let i = 0; i < task.length; i++) {
//                                 if (task[i].idMission == element.id) {
//                                     if (task[i].status == 0) {
//                                         var tasks = $('<li class="check"><button id="' + task[i].id + '"><i class="fas fa-times"></i></button> ' + task[i].description + '</li>')
//                                         $('#taskTodo' + element.id).append(tasks)
//                                     } else if (task[i].status == 1) {
//                                         var tasks = $('<li class="checked"><button id="' + task[i].id + '"><i class="fas fa-check"></i></button> ' + task[i].description + '</li>')
//                                         $('#taskTodo' + element.id).append(tasks)
//                                         xi++
//                                     }
//                                     x++
//                                 }
//                             }
//                             var counttask = $('<p>vous avez ' + x + ' tâches pour ' + element.title + '</p>');
//                             $('.progress #task' + element.id).prepend(counttask);
//                             $('.progress .howMany' + element.id).prepend(xi + '/' + x);
//                         }
//                     })
//                     countFreeTime++;
//                 }
//                 // POUR AFFICHER LES MISSION URGENT JOUR -2
//                 if (dataDeadLine < dayUrgent) {
//                     $('.urgent .container').append(box);
//                     $('.urgent #box' + element.id).append(boxTitle);
//                     $('.urgent #box' + element.id).append(form);
//                     $('.urgent #box' + element.id).append(boxContainer);
//                     $.ajax({
//                         url: 'api/task.php',
//                         method: 'POST',
//                         data: { get: 'true' },
//                         success: function(task) {
//                             task = JSON.parse(task);
//                             var x = 0;
//                             var xi = 0;
//                             for (let i = 0; i < task.length; i++) {
//                                 if (task[i].idMission == element.id) {
//                                     if (task[i].status == 0) {
//                                         var tasks = $('<li class="check" id="btn"><button id="' + task[i].id + '"><i class="fas fa-times"></i></button> ' + task[i].description + '</li>')
//                                         $('.urgent #taskTodo' + element.id).append(tasks)
//                                     } else if (task[i].status == 1) {
//                                         var tasks = $('<li class="checked" id="btn"><button id="' + task[i].id + '"><i class="fas fa-check"></i></button> ' + task[i].description + '</li>')
//                                         $('.urgent #taskTodo' + element.id).append(tasks)
//                                         xi++
//                                     }
//                                     x++
//                                 }
//                             }
//                             var counttask = $('<p>vous avez ' + x + ' tâches pour ' + element.title + '</p>');
//                             $('.urgent #task' + element.id).prepend(counttask);
//                             $('.urgent .howMany' + element.id).prepend(xi + '/' + x);
//                         }
//                     })
//                     countUrgent++;
//                 }
//                 $('.down' + element.id).click(function() {
//                     $('#task' + element.id).toggle();
//                 });
//             });
//             $('.toDo .countTask').prepend('(' + countTodo + ')');
//             $('.progress .countTask').prepend('(' + countFreeTime + ')');
//             $('.urgent .countTask').prepend('(' + countUrgent + ')');

//             $('.toDo .notice').prepend('vous avez ' + countTodo + ' missions a faire');
//             $('.progress .notice').prepend('vous avez ' + countFreeTime + ' missions a faire en temps libre');
//             $('.urgent .notice').prepend('vous avez ' + countUrgent + ' missions en dead line');
//         },
//         error: function() {
//             alert("Erreur lors de l'inscription");
//         }
//     })

// })

// $('#btn').click(function() {
//     console.log("ok");
// })
var today = new Date();
dayUrgent = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 3);

$(document).ready(function() {
    boxs();
})

function boxs() {


    fetch('api/todo.php').then(Response => { return Response.json() }).then(missionData => {
        var xi = 0;
        var yi = 0;
        var zi = 0;

        var zj = 0;
        missionData.forEach(mission => {
            var dataDeadLine = new Date(mission.deadLine);
            dataDeadLine = dataDeadLine.getFullYear() + '-' + (dataDeadLine.getMonth() + 1) + '-' + dataDeadLine.getDate();
            var dayDead = new Date(mission.deadLine);
            dayDead = dayDead.getDate() + '/' + ('0' + (dayDead.getMonth() + 1)).slice(-2);
            var desc = $('.todo #addtask #description').val();
            var box = $(`<div class="box">
                    <div class="boxTitle">
                        <h3>${mission.title}</h3>
                        <nav id="showAddTask${mission.id}" class="showAddTask"><i class="fas fa-plus"></i></nav>
                    </div>
                    <form method="post" class="addtask${mission.id}" id="addtask">
                        <input type="text" name="description" id="description${mission.id}" placeholder="Nom de la tâche">
                        <br>
                        <input type="button" id="btnaddtask${mission.id}" value="GO">
                    </form>
                    <div class="task">
                        <p></p>
                        <ul id="tasks${mission.id}"></ul>
                    </div>
                    <div class="boxContainer">
                        <div>
                            <p>date</p>
                            <p>${dayDead}</p>
                        </div>
                        <div>
                            <p>tâches</p>
                            <p class="count${mission.id}"></p>
                        </div>
                    </div>
                </div>`);

            if (mission.tableto == "todo" && dataDeadLine >= dayUrgent) {
                $('.toDo .container').append(box);
                $(`.toDo #btnaddtask${mission.id}`).click(function() {
                    sendtask($(`.toDo #description${mission.id}`).val(), mission.id);
                })
                xi++;
            }
            if (mission.tableto == "freeTime" && dataDeadLine >= dayUrgent) {
                $('.progress .container').append(box);
                $(`.progress #btnaddtask${mission.id}`).click(function() {
                    sendtask($(`.progress #description${mission.id}`).val(), mission.id);
                })
                yi++;
            }
            if (dataDeadLine < dayUrgent) {
                $('.urgent .container').append(box);
                $(`.urgent #btnaddtask${mission.id}`).click(function() {
                    sendtask($(`.urgent #description${mission.id}`).val(), mission.id);
                })
                zi++;
            }

            fetch('api/task.php?get=task').then(Response => { return Response.json() }).then(taskData => {
                var xj = 0;
                var yj = 0;
                for (let i = 0; i < taskData.length; i++) {
                    const task = taskData[i];
                    if (task.idMission == mission.id) {
                        yj++;
                        if (task.status == 0) {
                            var check = 'check'
                            var valide = 'valideTask';
                        } else {
                            var check = 'checked';
                            var valide = 'desvalideTask';
                            xj++;
                        }
                        var tasks = $(`<li class='${check}' id="taskid${task.id}"><button onclick="${valide}(${task.id},${mission.id})"></button>${task.description}</li>`)
                        $(`#tasks${mission.id}`).prepend(tasks);

                    }
                }
                if (yj > 0 && xj == yj) {
                    $('.done .container').append(box);
                    $(`.done #btnaddtask${mission.id}`).click(function() {
                        sendtask($(`.done #description${mission.id}`).val(), mission.id);
                    })
                    zi++;
                }

                counts(mission.id, xj, yj);
                $(`#tasks${mission.id} .checked button`).prepend(`<i class="fas fa-check"></i>`);
            }); //FIN DEUXIEME FETCH..
            $(`.toDo #showAddTask${mission.id} i`).click(function() {
                $(`.toDo .addtask${mission.id}`).toggle();
            })
            $(`.progress #showAddTask${mission.id} i`).click(function() {
                $(`.progress .addtask${mission.id}`).toggle();
            })

        }); //FIN DE FOREACH..
        $('.toDo .countTask').append(`<span>(${xi})</span>`);
        $('.progress .countTask').append(`<span>(${yi})</span>`);
        $('.urgent .countTask').append(`<span>(${zi})</span>`);

        $('.toDo .notice').append(`<span>vous avez ${xi} missions à faire</span>`);
        $('.progress .notice').append(`<span>${yi} missions à faire en temps libre</span>`);
        $('.urgent .notice').append(`<span>vous avez ${zi} missions en urgence</span>`);

    })
}

function counts(id, cont, total) {
    $(`.boxContainer .count${id}`).append(`<span>${cont}/${total}</span>`);
}
//m---------------------
function valideTask(taskid, missionid) {
    $.ajax({
        url: 'api/task.php',
        method: 'GET',
        data: { id: taskid },
        success: function(valide) {
            task = JSON.parse(valide);
            task = task[0];
            $(`#taskid${taskid}`).remove();
            $(`#tasks${missionid}`).append(`<li class='checked' id="taskid${taskid}"><button onclick="desvalideTask(${taskid},${missionid})"><i class="fas fa-check"></i></button>${task.description}</li>`);
        }
    })
}


function desvalideTask(taskid, missionid) {
    $.ajax({
        url: 'api/task.php',
        method: 'GET',
        data: { desid: taskid },
        success: function(valide) {
            task = JSON.parse(valide);
            task = task[0];
            $(`#taskid${taskid}`).remove();
            $(`#tasks${missionid}`).prepend(`<li class='check' id="taskid${taskid}"><button onclick="valideTask(${taskid},${missionid})"></button>${task.description}</li>`);
        }
    })
}


$('.toDo #showAddMission').click(function() {
    $('.toDo .mission').toggle();
})
$('.progress #showAddMission').click(function() {
    $('.progress .mission').toggle();
})


$('.toDo #addMission').click(function() {
    var title = $('.toDo #title').val();
    var dead = $('.toDo #dead').val();
    var tableto = 'todo';
    $.ajax({
        url: 'api/task.php',
        method: 'GET',
        data: { title: title, dead: dead, tableto: tableto },
        success: function() {
            // console.log(valide);
            // var box = $(`<div class="box">
            //                 <div class="boxTitle">
            //                     <h3>${title}</h3>
            //                 </div>
            //                 <div class="task">
            //                     <p></p>
            //                     <ul id="tasks"></ul>
            //                 </div>
            //                 <div class="boxContainer">
            //                     <div>
            //                         <p>date</p>
            //                         <p>${dayDead}</p>
            //                     </div>
            //                     <div>
            //                         <p>tâches</p>
            //                         <p>3/9</p>
            //                     </div>
            //                 </div>
            //             </div>
            //             <br>`);
            // $('.toDo .container .mission').after(box);
            // boxs()
            $('.box').remove();
            $('.toDo .countTask span').remove();
            $('.progress .countTask span').remove();
            $('.urgent .countTask span').remove();

            $('.toDo .notice span').remove();
            $('.progress .notice span').remove();
            $('.urgent .notice span').remove();
            $('.toDo .mission').toggle();
            boxs();
        }
    })
})

$('.progress #addMission').click(function() {
    var title = $('.progress #title').val();
    var dead = $('.progress #dead').val();
    var tableto = 'freeTime';
    $.ajax({
        url: 'api/task.php',
        method: 'GET',
        data: { title: title, dead: dead, tableto: tableto },
        success: function() {
            $('.box').remove();
            $('.toDo .countTask span').remove();
            $('.progress .countTask span').remove();
            $('.urgent .countTask span').remove();

            $('.toDo .notice span').remove();
            $('.progress .notice span').remove();
            $('.urgent .notice span').remove();
            $('.progress .mission').toggle();
            boxs();
        }
    })
})

function sendtask(taskDesc, idmission) {
    console.log(taskDesc + ' ' + idmission);
    $.ajax({
        url: 'api/task.php',
        method: 'GET',
        data: { taskdesc: taskDesc, idmission: idmission },
        success: function() {
            $('.box').remove();
            $('.toDo .countTask span').remove();
            $('.progress .countTask span').remove();
            $('.urgent .countTask span').remove();

            $('.toDo .notice span').remove();
            $('.progress .notice span').remove();
            $('.urgent .notice span').remove();
            //$('.toDo .mission').toggle();
            boxs();
        }
    })
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

$('header nav').click(function() {
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    $(location).attr('href', 'index.php');
})