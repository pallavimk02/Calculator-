document.addEventListener("DOMContentLoaded", function () {
    const semesterForm = document.getElementById("semesterForm");
    const addSemesterBtn = document.getElementById("addSemesterBtn");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultDiv = document.getElementById("result");

    let semesterCount = 1;

    addSemesterBtn.addEventListener("click", function () {
        const semesterFields = `
            <div class="semester">
                <h3>Semester ${semesterCount}</h3>
                <label for="credits${semesterCount}">Credits:</label>
                <input type="number" id="credits${semesterCount}" required>
                <label for="grades${semesterCount}">Grades:</label>
                <input type="number" id="grades${semesterCount}" step="0.01" min="0" max="4" required>
            </div>
        `;
        semesterForm.insertAdjacentHTML("beforeend", semesterFields);
        semesterCount++;
    });

    calculateBtn.addEventListener("click", function () {
        let totalCredits = 0;
        let totalGradePoints = 0;

        for (let i = 1; i < semesterCount; i++) {
            const credits = parseFloat(document.getElementById(`credits${i}`).value);
            const grades = parseFloat(document.getElementById(`grades${i}`).value);

            totalCredits += credits;
            totalGradePoints += credits * grades;
        }

        const sgpa = totalGradePoints / totalCredits;
        const cgpa = sgpa; // Assuming simple calculation for CGPA

        resultDiv.innerHTML = `
            <p>SGPA: ${sgpa.toFixed(2)}</p>
            <p>CGPA: ${cgpa.toFixed(2)}</p>
        `;
    });
});
