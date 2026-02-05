        // البيانات - هتضيف هنا المواد والملفات
        const data = {
            1: { // السنة الأولى
                1: [ // الترم الأول
                    { id: 1, name: "computer lanuage", code: "EC121" },
                    { id: 2, name: "Electrical Circuits 1", code: "E121" },
                    { id: 3, name: "Electronic 1", code: "E122" },
                    { id: 4, name: "math 3", code: "MATH101" },
                    { id: 5, name: "stracture", code: "C101" },
                    { id: 6, name: "مقرر انساني و ثقافي 1", code: "ART101" }
                ],
                2: [ // الترم الثاني
                    { id: 7, name: "Field 1", code: "E123" },
                    { id: 8, name: "قياسات كهربائية و الالكترونية", code: "E124" },
                    { id: 9, name: "Math 4", code: "MAHT102" },
                    { id: 10, name: "اختبارات كهربائية 1", code: "E125" },
                    { id: 11, name: "إحصاء و نظرية الاحتمالات ", code: "MAHT103" },
                    { id: 12, name: "مقرر انساني و ثقافي 2", code: "ART102" }
                ]
            },
            2: { // السنة الثانية
                1: [
                    { id: 13, name: "المادة الأولى", code: "CODE" },
                    { id: 14, name: "المادة الثانية", code: "CODE" },
                    { id: 15, name: "المادة الثالثة", code: "CODE" },
                    { id: 16, name: "المادة الرابعة", code: "CODE" },
                    { id: 17, name: "المادة الخامسة", code: "CODE" },
                    { id: 18, name: "المادة السادسة", code: "CODE" }
                ],
                2: [
                    { id: 19, name: "المادة الأولى", code: "CODE" },
                    { id: 20, name: "المادة الثانية", code: "CODE" },
                    { id: 21, name: "المادة الثالثة", code: "CODE" },
                    { id: 22, name: "المادة الرابعة", code: "CODE" },
                    { id: 23, name: "المادة الخامسة", code: "CODE" },
                    { id: 24, name: "المادة السادسة", code: "CODE" }
                ]
            },
            3: { // السنة الثالثة
                1: [
                    { id: 25, name: "المادة الأولى", code: "CODE" },
                    { id: 26, name: "المادة الثانية", code: "CODE" },
                    { id: 27, name: "المادة الثالثة", code: "CODE" },
                    { id: 28, name: "المادة الرابعة", code: "CODE" },
                    { id: 29, name: "المادة الخامسة", code: "CODE" },
                    { id: 30, name: "المادة السادسة", code: "CODE" }
                ],
                2: [
                    { id: 31, name: "المادة الأولى", code: "CODE" },
                    { id: 32, name: "المادة الثانية", code: "CODE" },
                    { id: 33, name: "المادة الثالثة", code: "CODE" },
                    { id: 34, name: "المادة الرابعة", code: "CODE" },
                    { id: 35, name: "المادة الخامسة", code: "CODE" },
                    { id: 36, name: "المادة السادسة", code: "CODE" }
                ]
            },
            4: { // السنة الرابعة
                1: [
                    { id: 37, name: "المادة الأولى", code: "CODE" },
                    { id: 38, name: "المادة الثانية", code: "CODE" },
                    { id: 39, name: "المادة الثالثة", code: "CODE" },
                    { id: 40, name: "المادة الرابعة", code: "CODE" },
                    { id: 41, name: "المادة الخامسة", code: "CODE" },
                    { id: 42, name: "المادة السادسة", code: "CODE" }
                ],
                2: [
                    { id: 43, name: "المادة الأولى", code: "CODE" },
                    { id: 44, name: "المادة الثانية", code: "CODE" },
                    { id: 45, name: "المادة الثالثة", code: "CODE" },
                    { id: 46, name: "المادة الرابعة", code: "CODE" },
                    { id: 47, name: "المادة الخامسة", code: "CODE" },
                    { id: 48, name: "المادة السادسة", code: "CODE" }
                ]
            }
        };

        // بيانات الملفات - أضف لينكات الدرايف
        const filesData = {
            // مثال: subjectId_contentType: [files]
            "1_lectures": [
                { name: "Lecture 1", url: "https://drive.google.com/file/d/10K6_pdIX16zmUMq3we8yoPZvIq4a1Hzk/preview" },
                { name: "Lecture 2", url: "https://drive.google.com/file/d/1UHNFVG-0sjTVjHzbhX715vTxYTNeLqUp/preview" },
                { name: "Lecture 3", url: "https://drive.google.com/file/d/1jUPElXxIf0Tvn6lDG2UTISspLw-9w4OK/preview" },
                { name: "Lecture 4", url: "https://drive.google.com/file/d/19UViIi6DeJbuAOzvyEuHQYSu7SYKsXeb/preview" },
                { name: "Lecture 5", url: "https://drive.google.com/file/d/1jNkiICqKcq73PJmKEl1Y3looNqhtwgMc/preview" },
                { name: "Lecture 6", url: "https://drive.google.com/file/d/1yExOxPBKV5urKfTz7EILkC1sWbo7-RBu/preview" },
                { name: "Lecture 7", url: "https://drive.google.com/file/d/14uOYDAeS414HKNXWreD-qQ3WSD1VOgXQ/preview" },
                { name: "Lecture 8", url: "https://docs.google.com/presentation/d/1LAUhHxdIltjDK3ogZU92n3ABtMSRcOER/edit?usp=drive_link&ouid=107162974634827918315&rtpof=true&sd=true" },
                { name: "Lecture 9", url: "https://drive.google.com/file/d/1nQwrEA84gUIzIC9HsaFgXDYm9wHQ9tPQ/preview" },
            ],
            "1_sections": [
                { name: "في المعمل ", url: "" }
            ],
            "1_books": [
                { name: "تعلم ++c للمبتدئين", url: "https://drive.google.com/file/d/1p8Rcqs71_31Dx-VWTR9RJ1SYwU5J4S_N/preview" }
            ]
        
        };

        // المتغيرات
        let currentYear = null;
        let currentTerm = null;
        let currentSubject = null;
        let currentContentType = null;

        const yearNames = {
            1: "السنة الأولى",
            2: "السنة الثانية",
            3: "السنة الثالثة",
            4: "السنة الرابعة"
        };

        const termNames = {
            1: "الترم الأول",
            2: "الترم الثاني"
        };

        const contentTypeNames = {
            lectures: "محاضرات",
            sections: "سكاشن",
            quizzes: "كويزات",
            summaries: "تلخيصات",
            books: "كتب"
        };

        // العناصر
        const yearsButtons = document.querySelector('.years-buttons');
        const termsSelector = document.querySelector('.terms-selector');
        const subjectsView = document.querySelector('.subjects-view');
        const contentTypesView = document.querySelector('.content-types-view');
        const filesView = document.querySelector('.files-view');
        const backToHome = document.querySelector('.back-to-home');
        const pdfViewer = document.getElementById('pdfViewer');

        // اختيار السنة
        document.querySelectorAll('.year-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentYear = parseInt(btn.dataset.year);
                yearsButtons.classList.add('hidden');
                termsSelector.classList.add('show');
                document.getElementById('selectedYearTitle').textContent = yearNames[currentYear] + ' - اختر الترم';
            });
        });

        // اختيار الترم
        document.querySelectorAll('.term-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentTerm = parseInt(btn.dataset.term);
                termsSelector.classList.remove('show');
                showSubjects();
            });
        });

        // عرض المواد
        function showSubjects() {
            const subjects = data[currentYear][currentTerm];
            const grid = document.getElementById('subjectsGrid');
            grid.innerHTML = '';
            
            document.getElementById('subjectsTitle').textContent = 
                yearNames[currentYear] + ' - ' + termNames[currentTerm];
            
            subjects.forEach(subject => {
                const card = document.createElement('div');
                card.className = 'subject-card';
                card.innerHTML = `
                    <h3>${subject.name}</h3>
                    <p>كود المادة: ${subject.code}</p>
                `;
                card.addEventListener('click', () => selectSubject(subject));
                grid.appendChild(card);
            });
            
            subjectsView.classList.add('show');
            backToHome.classList.add('show');
        }

        // اختيار مادة
        function selectSubject(subject) {
            currentSubject = subject;
            subjectsView.classList.remove('show');
            document.getElementById('contentTypesTitle').textContent = subject.name;
            contentTypesView.classList.add('show');
        }

        // اختيار نوع المحتوى
        document.querySelectorAll('.content-type-card').forEach(card => {
            card.addEventListener('click', () => {
                currentContentType = card.dataset.type;
                contentTypesView.classList.remove('show');
                showFiles();
            });
        });

        // عرض الملفات
        function showFiles() {
            const key = `${currentSubject.id}_${currentContentType}`;
            const files = filesData[key] || [];
            
            document.getElementById('filesTitle').textContent = 
                currentSubject.name + ' - ' + contentTypeNames[currentContentType];
            
            const filesList = document.getElementById('filesList');
            
            if (files.length === 0) {
                filesList.innerHTML = `
                    <div class="empty-state">
                        <div style="font-size: 3rem;">📁</div>
                        <p>لا توجد ملفات حالياً</p>
                        <p style="font-size: 0.9rem; margin-top: 10px;">أضف الملفات في الكود:</p>
                        <code style="background: #f3f4f6; padding: 5px 10px; border-radius: 5px; display: inline-block; margin-top: 10px;">
                            filesData["${key}"]
                        </code>
                    </div>
                `;
            } else {
                filesList.innerHTML = files.map(file => `
                    <div class="file-item">
                        <div class="file-info">
                            <div class="file-icon">📄</div>
                            <div class="file-name">${file.name}</div>
                        </div>
                        <div class="file-actions">
                            <button class="file-btn view-btn" onclick="viewPDF('${file.url}', '${file.name}')">👁️ عرض</button>
                            <button class="file-btn download-btn" onclick="downloadFile('${file.url}', '${file.name}')">⬇️ تحميل</button>
                        </div>
                    </div>
                `).join('');
            }
            
            filesView.classList.add('show');
        }

        // عرض PDF
        function viewPDF(url, name) {
            document.getElementById('pdfTitle').textContent = name;
            document.getElementById('pdfFrame').src = url;
            pdfViewer.classList.add('show');
        }

        // تحميل ملف
        function downloadFile(url, name) {
            const downloadUrl = url.replace('/preview', '/view?usp=sharing');
            window.open(downloadUrl, '_blank');
        }

        // إغلاق PDF Viewer
        document.getElementById('closePdfBtn').addEventListener('click', () => {
            pdfViewer.classList.remove('show');
            document.getElementById('pdfFrame').src = '';
        });

        // أزرار الرجوع
        document.getElementById('backToYears').addEventListener('click', () => {
            termsSelector.classList.remove('show');
            yearsButtons.classList.remove('hidden');
            currentYear = null;
        });

        document.getElementById('backToTerms').addEventListener('click', () => {
            subjectsView.classList.remove('show');
            termsSelector.classList.add('show');
            backToHome.classList.remove('show');
            currentTerm = null;
        });

        document.getElementById('backToSubjects').addEventListener('click', () => {
            contentTypesView.classList.remove('show');
            subjectsView.classList.add('show');
            currentSubject = null;
        });

        document.getElementById('backToContentTypes').addEventListener('click', () => {
            filesView.classList.remove('show');
            contentTypesView.classList.add('show');
            currentContentType = null;
        });

        document.getElementById('backToHomeBtn').addEventListener('click', () => {
            subjectsView.classList.remove('show');
            contentTypesView.classList.remove('show');
            filesView.classList.remove('show');
            termsSelector.classList.remove('show');
            yearsButtons.classList.remove('hidden');
            backToHome.classList.remove('show');
            currentYear = null;
            currentTerm = null;
            currentSubject = null;
            currentContentType = null;
        });

        // البحث
        document.getElementById('searchInput').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (!searchTerm) {
            document.getElementById('noResults').style.display = 'none';
            return;
        }

        let foundSubject = null;
        let foundYear = null;
        let foundTerm = null;

        for (let year in data) {
            for (let term in data[year]) {
                data[year][term].forEach(subject => {
                    if (subject.name.toLowerCase().includes(searchTerm)) {
                        foundSubject = subject;
                        foundYear = year;
                        foundTerm = term;
                    }
                });
            }
        }

        if (!foundSubject) {
            document.getElementById('noResults').style.display = 'block';
            return;
        }

        // إخفاء كل الواجهات
        document.getElementById('noResults').style.display = 'none';
        yearsButtons.classList.add('hidden');
        termsSelector.classList.remove('show');
        contentTypesView.classList.remove('show');
        filesView.classList.remove('show');

        // حفظ الحالة
        currentYear = parseInt(foundYear);
        currentTerm = parseInt(foundTerm);

        // عرض المواد
        showSubjects();

        // تمييز المادة
        setTimeout(() => {
            document.querySelectorAll('.subject-card').forEach(card => {
                if (card.querySelector('h3').textContent === foundSubject.name) {
                    card.style.border = '3px solid #f59e0b';
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }, 100);

    });


        
    // window.addEventListener("scroll", () => {
    //     const footer = document.querySelector("footer");

    //     if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
    //         footer.style.bottom = "0";   // يظهر
    //     } else {
    //         footer.style.bottom = "-60px"; // يختفي
    //     }
    // });



