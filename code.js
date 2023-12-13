function quicksort(array) {
	if (array.length === 0) {
		return array;
	}

	const stack = [];

	stack.push({ left: 0, right: array.length - 1 });

	while (stack.length) {
		const { left, right } = stack.pop();

		// first element is the pivot.
		const pivot = array[left];

		let i = left + 1;
		let j = right;

		while (i <= j) {
			//move elements smaller than the pivot to the left.
			while (i <= j && array[i] <= pivot) {
				i++;
			}

			//move elements greater than the pivot to the right
			while (i <= j && array[j] > pivot) {
				j--;
			}

			//swap elements
			if (i < j) {
				[array[i], array[j]] = [array[j], array[i]];
			}
		}

		//place the pivot element in its final position
		[array[left], array[j]] = [array[j], array[left]];

		//push the smaller and larger sub-partitions onto the stack
		if (left < j) stack.push({ left, right: j - 1 });
		if (i < right) stack.push({ left: i, right });
	}

	return array;
}
