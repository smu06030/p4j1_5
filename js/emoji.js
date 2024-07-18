document.addEventListener('DOMContentLoaded', function() {
    const emojiButtons = document.querySelectorAll('.emojiBtn'); // 모든 이모지 버튼들을 선택
    const toggleButton = document.querySelector('.toggleBtn'); // 팝오버 토글 버튼
    const popoveremojiBox = document.getElementById('popoveremojiBox'); // 팝오버를 담을 컨테이너
    const popover = document.querySelector('.popover'); // 팝오버 엘리먼트

    // 각 이모지 버튼에 클릭 이벤트 추가
    emojiButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const selectedEmoji = button.getAttribute('data-emoji'); // 선택된 이모지 가져오기
            popover.style.display = 'none'; // 팝오버 숨기기
            button.textContent = selectedEmoji; // 버튼 텍스트 변경
        });
    });

    // 팝오버 토글 버튼 클릭 시 이벤트 처리
    toggleButton.addEventListener('click', function() {
        if (popover.style.display === 'block') {
            popover.style.display = 'none'; // 팝오버 닫기
        } else {
            const rect = toggleButton.getBoundingClientRect();
            popover.style.top = rect.top + 'px'; // 버튼 아래에 위치
            popover.style.left = rect.left + 'px'; // 버튼 왼쪽 정렬
            popover.style.display = 'block'; // 팝오버 열기
        }
    });

    // 이모지 아이템들에 클릭 이벤트 추가
    const emojiItems = document.querySelectorAll('.emoji');
    emojiItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const selectedEmoji = item.getAttribute('data-emoji'); // 선택된 이모지 가져오기
            const popoverParentButton = popoveremojiBox.previousElementSibling; // 팝오버를 호출한 버튼 가져오기
            popoverParentButton.textContent = selectedEmoji; // 버튼 텍스트 변경
            popover.style.display = 'none'; // 팝오버 숨기기
        });
    });
});