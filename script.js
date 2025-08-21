    const rows = document.querySelectorAll("#attendanceTable tbody tr");
    const summary = document.getElementById("summary");

    function updateSummary(){
      let presentCount = 0, absentCount = 0;
      rows.forEach(row => {
        const status = row.querySelector(".status").innerText;
        if(status === "Present") presentCount++;
        else if(status === "Absent") absentCount++;
      });
      summary.innerText = `Total Present: ${presentCount} | Total Absent: ${absentCount}`;
    }

    rows.forEach(row => {
      const presentBtn = row.querySelector(".present");
      const absentBtn = row.querySelector(".absent");
      const statusCell = row.querySelector(".status");

      presentBtn.addEventListener("click", () => {
        statusCell.innerText = "Present";
        statusCell.style.color = "#28a745";
        updateSummary();
      });

      absentBtn.addEventListener("click", () => {
        statusCell.innerText = "Absent";
        statusCell.style.color = "#dc3545";
        updateSummary();
      });
    });