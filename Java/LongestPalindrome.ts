function LongestPalindrome(s: string): number | string{
        let n = s.length;
            let pal = "";

            let maxLength = 1, start = 0;
            for (let i = 0; i < s.length; i++)
            {
                for (let j = i; j < s.length; j++)
                {
                    let flag = 1;

                    for (let k = 0; k < (j - i + 1) / 2; k++)
                        if (s[i + k] != s[j - k])
                            flag = 0;

                    if (flag != 0 && (j - i + 1) > maxLength)
                    {
                        start = i;
                        maxLength = j - i + 1;
                    }
                }
            }

            for (let i = start; i <= start + maxLength - 1; ++i)
            {
                pal += s[i];
            }


            return pal;
}

const gmail = LongestPalindrome('aabb');
console.log(gmail);
