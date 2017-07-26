(function($) {
  $(function() {

    var d = new Date();
    var presentYear = d.getFullYear();
    var presentMonth = d.getMonth() + 1;
    var presentDay = d.getDate();

    var students = [{
        name: 'Pedro',
        bornYear: '1999',
        bornMonth: '2',
        bornDay: '23'
      },
      {
        name: 'Javier',
        bornYear: '1998',
        bornMonth: '10',
        bornDay: '8'
      },
      {
        name: 'Jose',
        bornYear: '1998',
        bornMonth: '4',
        bornDay: '21'
      },
      {
        name: 'Byron',
        bornYear: '1999',
        bornMonth: '7',
        bornDay: '23'
      },
      {
        name: 'Carolina',
        bornYear: '1998',
        bornMonth: '8',
        bornDay: '24'
      },
      {
        name: 'Denis',
        bornYear: '1998',
        bornMonth: '8',
        bornDay: '28'
      },
      {
        name: 'Adrian',
        bornYear: '1998',
        bornMonth: '4',
        bornDay: '29'
      },
      {
        name: 'Jaqueline',
        bornYear: '1998',
        bornMonth: '11',
        bornDay: '11'
      },
      {
        name: 'Litzy',
        bornYear: '1997',
        bornMonth: '12',
        bornDay: '1'
      },
      {
        name: 'Abraham',
        bornYear: '1997',
        bornMonth: '4',
        bornDay: '24'
      },
      {
        name: 'Christian',
        bornYear: '1999',
        bornMonth: '6',
        bornDay: '3'
      },
      {
        name: 'Diana',
        bornYear: '1999',
        bornMonth: '3',
        bornDay: '19'
      },
      {
        name: 'Liliana',
        bornYear: '1999',
        bornMonth: '6',
        bornDay: '17'
      },
      {
        name: 'Jullian',
        bornYear: '1999',
        bornMonth: '1',
        bornDay: '21'
      },
      {
        name: 'Jonathan',
        bornYear: '1998',
        bornMonth: '8',
        bornDay: '9'
      },
      {
        name: 'Yaremi',
        bornYear: '1998',
        bornMonth: '7',
        bornDay: '2'
      },
      {
        name: 'Natalia',
        bornYear: '1997',
        bornMonth: '12',
        bornDay: '17'
      },
      {
        name: 'Maria',
        bornYear: '1999',
        bornMonth: '11',
        bornDay: '8'
      }
    ];

    console.log(
      presentYear, presentMonth, presentDay, students[0].bornYear, d
    );

    var showStudents = [];

    for (var i = 0; i < students.length; i++) {

      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      var calculatedYear = calculateYear(students[i].bornDay, students[i].bornMonth, students[i].bornYear);
      var showDayVar = calculateDays(students[i].bornDay, students[i].bornMonth, calculatedYear);
      var showYearVar = monthNames[students[i].bornMonth - 1] + " " + students[i].bornDay + ", " + calculatedYear;


        showStudents.push({
          showName: students[i].name,
          showDay: showDayVar,
          showYear: showYearVar
        });
    };

    showStudents.sort(function(a, b) {
      return parseFloat(a.showDay) - parseFloat(b.showDay);
    });

    for (var i = 0; i < showStudents.length; i++) {
      var theTable = document.getElementById("tableContent");
      var content = '<tr>' +
        '<td>' + showStudents[i].showName + '</td>' +
        '<td>' + showStudents[i].showDay + '</td>' +
        '<td>' + showStudents[i].showYear + '</td>' +
        '</tr>';

      theTable.insertAdjacentHTML('beforeend', content);
    };

    console.log(
      showStudents[0].showName,
      calculateYear(students[0].bornDay, students[0].bornMonth, students[0].bornYear),
      calculateYear(3, 6, 1999)
    );

    function calculateDays(day, month, year) {
      var milisecondsPerDay = 1000 * 60 * 60 * 24;
      var utc1 = Date.UTC(year, month, day);
      var utc2 = Date.UTC(presentYear, presentMonth, presentDay);

      return Math.floor((utc1 - utc2) / milisecondsPerDay);
    }

    function calculateYear(day, month, year) {
      var milisecondsPerDay = 1000 * 60 * 60 * 24;
      var utc1 = Date.UTC(presentYear, month, day);
      var utc2 = Date.UTC(presentYear, presentMonth, presentDay);
      var days = Math.floor((utc1 - utc2) / milisecondsPerDay);
      var nextYear;

      if (days > 0) {
        nextYear = presentYear;
      } else {
        nextYear = presentYear + 1;
      }

      return nextYear;
    }


    //$('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
