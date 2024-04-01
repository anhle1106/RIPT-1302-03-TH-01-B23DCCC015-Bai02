
var studentsData = [
    { STT: 1, Tên: "Nguyễn Văn A",MSV:"B23DCCC015", Tuổi: 20, "Địa chỉ": "Hà Nội", SDT: "0987654321", Email: "nguyenvana@gmail.com", "Lớp học": "A1" },
    { STT: 2, Tên: "Trần Thị B",MSV:"B23DCCC014", Tuổi: 21, "Địa chỉ": "Hồ Chí Minh", SDT: "0123456789", Email: "tranthib@gmail.com", "Lớp học": "A2" }
  ];
  
function displayStudents() {
    var tableBody = document.getElementById("studentList");
    tableBody.innerHTML = "";
  
    studentsData.forEach(function(student) {
      var row = tableBody.insertRow();
      for (var key in student) {
        var cell = row.insertCell();
        cell.textContent = student[key];
      }
      var actionCell = row.insertCell();
      actionCell.innerHTML = '<button onclick="editStudent(this)">Sửa</button> <button onclick="deleteStudent(this)">Xóa</button>';
    });
}
function addStudent() {
    var newStudent = {
      STT: studentsData.length + 1,
      MSV:prompt("Nhập MSV:"),
      Tên: prompt("Nhập tên sinh viên:"),
      Tuổi: parseInt(prompt("Nhập tuổi của sinh viên:")),
      "Địa chỉ": prompt("Nhập địa chỉ của sinh viên:"),
      SDT: prompt("Nhập số điện thoại của sinh viên:"),
      Email: prompt("Nhập email của sinh viên:"),
      "Lớp học": prompt("Nhập lớp học của sinh viên:")
    };
  
    studentsData.push(newStudent);
    displayStudents();
}
function editStudent(button) {
    var rowIndex = button.parentNode.parentNode.rowIndex - 1;
    var student = studentsData[rowIndex];
    var newMSV = prompt("Nhập MSV mới:",student.MSV)
    var newName = prompt("Nhập tên mới:", student.Tên);
    var newTuoi = prompt("Nhập tuổi mới:", student.Tuổi);
    var newaddress = prompt("Nhập địa chỉ mới :",student["Địa chỉ"]);
    var newSDT = prompt("Nhập SDT mới:",student.SDT);
    var newemail = prompt("Nhập email mới :",student.Email);
    var newlop = prompt("Nhập lớp mới :",student["Lớp học"]);
    if(newMSV!== null){
      student.MSV=newMSV
    }

    if (newName !== null ) {
      student.Tên = newName;
    }
    if(newTuoi !=null){
       student.Tuổi=parseInt(newTuoi);
    }
    if(newaddress!=null){
        student[ "Địa chỉ" ]=newaddress;
    }
    if(newSDT!==null){
         student.SDT=newSDT;
    }
    if(newemail!==null){
          student.Email=newemail;
    }
    if(newlop!==null){
           student["Lớp học"]=newlop;
    }
    displayStudents()
}
function deleteStudent(button) {
    var rowIndex = button.parentNode.parentNode.rowIndex - 1;
    studentsData.splice(rowIndex, 1);
    displayStudents();
}
displayStudents();
console.log(studentsData);