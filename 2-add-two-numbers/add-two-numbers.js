// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);  // Determine the carry for the next step
        current.next = new ListNode(sum % 10);  // Create a new node for the current digit
        current = current.next;
    }

    return dummy.next;  // Return the head of the newly constructed linked list
};
