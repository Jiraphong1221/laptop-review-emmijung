document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Typing Effect สำหรับ Subtitle ด้านบน
    const text = "แนะนำAcerดีกว่า Office ถาวร ไม่เล่นเกมเน้นทำงานเอกสาร เล่นได้นิดหน่อยมายคราฟrobloxพอไหว";
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // ปรับความเร็วการพิมพ์ที่นี่ (ms)
        } else {
            // เพิ่ม Cursor กะพริบตอนพิมพ์เสร็จ
            typingElement.innerHTML += '<span style="animation: blink 1s infinite;">|</span>';
        }
    }

    // เริ่มพิมพ์หลังจากโหลดหน้าเว็บเสร็จ 500ms
    setTimeout(typeWriter, 500);

    // 2. Scroll Reveal Animation (ให้ Element ลอยขึ้นมาเวลาเลื่อนจอ)
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // ระยะที่ให้แสดงผลก่อนเลื่อนถึงขอบจอ

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    };

    // เช็กสถานะครั้งแรกตอนโหลดหน้า
    revealOnScroll();

    // จับ Event เมื่อมีการเลื่อนเมาส์ (Scroll)
    window.addEventListener("scroll", revealOnScroll);
});

// เพิ่ม CSS สำหรับ Cursor กะพริบผ่าน JS เลย
const style = document.createElement('style');
style.innerHTML = `
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);