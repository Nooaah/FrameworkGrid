$(document).ready(function () {

    $('#toastBtn').click(() => {
        _toast("I'm a toast bro !","far fa-smile-beam fa-2x","normalToast",2)
    })
    $('#toastAlertBtn').click(() => {
        _toast("I'm an Alert toast bro !","fas fa-exclamation-circle fa-2x","alertToast",2)
    })
    
    function _toast(text, icon, color, duration)
    {
        //var nb_toast = document.getElementsByClassName('_toast_content').length;
        
        var _toast = document.getElementById('_toast');
        var li = document.createElement('li');
        li.classList.add('_toast_content');
        var i = document.createElement('i');
        i.classList = icon;
        li.appendChild(i);
        var p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        if (color == "normalToast")
            color = "#34495e";
        if (color == "alertToast")
            color = "#e74c3c";
        li.style.backgroundColor = color;
        document.querySelectorAll('._toast_content').forEach(function(e) {
            var stylelist = window.getComputedStyle(e);
            var bottom = stylelist.bottom;
            var value = parseInt(bottom.replace('px',''));
            e.style.bottom = value + 70 + 'px';
        });
        _toast.appendChild(li);

        li.addEventListener('click', () => {
            li.classList.remove('show');
        })
        
        setTimeout(() => {
            li.classList.add('show');
            setTimeout(() => {
                li.classList.remove('show');
                setTimeout(() => {
                    _toast.removeChild(li)
                }, 400);
            }, duration*1000);
        }, 200);
    }





});