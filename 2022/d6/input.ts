const input = `srlsrsnnwhwwmddwfddgldlglppcnpptftzzchzhbhmmvwmvwvvjsjnjbbvbmvmnmqmfmjfjjmllzddrvrrnsncnznndwwqrqjjsfsjsjsvsvzvtvfvrvhhbwwltttbhhvphhtqqnffsppdqqrmmfrmfrrwvrvrsvrsrzssrqqrfqrfrttqntnpttvrrcncnfftjfjwwfwjwpwwltlwwwvnvcnvvdgvddqlddnllrggqvgvzzjddfgdfdgfffsbfsffjmffprrmgmtmqqgzzlwldlbbgjjnfjnnvlnnlbbnjnzngglmggwtgwttnvtnvndndmnmdmcddzbdbbspbpwbpplvpvnnmtmqqwnwgglhghdhbhqbhhqrqhqcqmmmrwwlvvfnvfnnpddbfbgfgqglgddrggbgbqqfwfjfdjfflzldlbbsbbtftccgqggzgdglglzljjzbzfbzffgftfvtfvvvjmjzjmjfjqqccpcjppzfpzzsvvzjvvfgfmgffzhhdphdpdwdwmdwwlqljjzffzvfzfwzfzcztctssdpssndssvbbtbstbtnngjjspplttpffjggbbqsqnqcncscpcmccbmbdbtbcbbgqgwgwqgwgwsszqznzvvntvvmlvlvqqvgvwgwlldbblclqcqggtqqlsqlsqlqcczzqgghmgmrgmrggljlbjbsbsmmnlmmdppnpfnnvhnnzggchgggbwwvtvpptgpplsljjshhnphhblbnbpbgppfllhsllbtlbtllrprqrvvfgvgpgcpcdddjjplpssjrjqjggncnzccqdqfqpffvddhlhdllgzzrtrztrztzptztwwbjbnjnsjsfsbfbdbccnhnmhnhrhwhfhbbtzbtztzrttrzrfrcrtctqqrlrsshphwphwpwwcmczzpqzqztqqvzzshhddrvdrrztrrqcqbcqbbhnnpfnpfnnmcnmnccnmmhccjjwzwcwbwcwnngtnngrngnsnzzcvvvtnvvtpvtpvtvvhffbsfsnsdsmmzbbrqbqpbpcpdppzmzbmmtdmttvgvrvlrvvhddjgdjdbbthtjhjdjhdjjmssdldjllwppvbvnbnlbbbszbblpbpfbpblbzzszvssbcbgcghgbbcpbbqrrdjdnnjcjddjcdjjcqqhggflftftfhttvlttgdtdrttwppwvvrzzbggrjjmssrjsjmssdtttdbdvddpllpgllthhvfvhvddrhhnznwznwzzpbblvvpmvpmpddjvdvcddvsshfhrrghgnhghmhhmhffrsfrflrfrjrddzgzsggchcfhhsbbsrszzgjggnrrgfffhthdthtnhtntllsjjjwqqsbsttbtzbttlfttczzbfbwfwvvhllltjjsqsdqqspqsszqzhhdrrhccgbcgggcbggnvgvmmwcmmpqmqccshsnnnwrwfrrwrllvhvlvmlvljjgrgvrvddfqfwqfqlfqqqppvmvrmrfrvrwrqrjqrrvmrvmrrvffmtffsfdfdrdwrwjrrcgcwwcdwdrdnrnzztqzzzgdzgdgldltdtvtnnhllrtltbtrbbttgssdhsssrmsscnssmtmqqtssmzzjqzqddfrdrtdrdpdzzppwggsrrfvfnvvmgvgmmdnnbwnntlnntncchcmcjmmvzzzngznnbgbnbnvbvzzfqqmtmrmcmqmvmbmbmcmscsjcsshswsjsvswshwwlnnsslmslmmzgmgsmssrwwmjwmwllvbvppplmmwgmgzgzdgzdgzztrtzzchcssbppdbbmvmqmmzhztzdtzdznnqhhmcmnnncbnngjnjmjnmmqqsnqsnslnlqlppvbvwwvtwtfwtfmzsbdjfvhzcflstpbtprpzmwcwwgzshfssnjdgflcsfglhbvvdctfrccfmwgfvjtvqfqpzzmqtlbvrjqwlwclfzhfzcmwsvprdhzcrghdscprrnqgdgmhhwbcfcfzrcgrwvbstpwbcvcnpmftwwthnsjznzslfdfqhtpsgmjsddmhlhtlzfsnhlcbgnqpqbzppnbcgtzvwdpmgftgsmrwjqwsdnjrrmwrmlcvlqgwldnvmsgnwccwzmdzwdhpmpqffgbnrrrvzqhtlnvqfhgwbbwsghwbrjzjcjmjmsspcmnfbbpmwffbdqffqfwsvtcrghbnldspdhjhjvtdhgmvrzqqlhvnwbdhfprwqdtzswfdzdwhzvfzsfqlzcflhbsvjhnjnthrdrgmjrrbftflpvrmrvvsgnjhrhjffvznmbjtshwgjmcqbfqjlptsrcgzvrhctwsdclrstmsbsbpqpjcvftmvmsmpwmmphlwmljhvllhrmfcncdprrwfmqrlllmsrvrwtbsqddbmblhvqqlcbbtjbslggrshflrddsphbvzhprcvbpmfldnmwtchddbdwhwpgbmjqptsbdzhrbqfwgfltchsggjlbqbhmzbjdncnvsqjvftpwrpdcjzsrvrlzwqfptwzssqpltjhdmtmmgvjzzqswwrsqrqfpdllgzsdlvhfdnzlrmlqdclwhqqbtwdqcrlfdjphjvcfzpwwgphmrldnwjpnmsjnqpwtwglcbthmcbnvpmjbdhmjglgccsmrmbvbqphdlbrrgnbljlhqvgqbctmthvmsfzflwvctwmdgmrlhnmwnsjtzndlwfttcvtslppjwsgbzhztlpzhmjlrbtzfnblwwlddzwqvzbjmffbflvmvnsgjlqwjqvrcrtwbhfzbzzmtwsndqmtnbjbsqjpnwhzqgwwltwgrqfbhjtpzrqvvhgjsbzqmfdsmzjdnplvblvqlrtzsbjgdptdhgvvrblbjppnnhhnvqtmjgwqzwtmjglrjlwsrfdjfmzlsszzzpbwvjbwpcwlplhcmhgpclztjcrmcntnqbnlrmcnhcnhnmjggtqbtvcfmcbdpqhdrvspbrgcwhgjhggwpvjbplhdsnnvgbzhmcrjqvqlwsdvrrnntmwdgdqdvzznjflctlfmfzsdfbpftsscnbtnqcsvtltvnsqpghzcwtjctvwqqnvnddlzbftwrdqzltpczrbmvsmlpfjzphtpnngzdfrjqrtbppbvztsddblspbltsnrtdftmwbblgdqvmscjqpwfvdzphwqgrbpdfcvtvmddgjjpswrqnwjfghtzwzbhtjnwjsrnwhjwcwnrtwrmbmqjhrbmbsslnvtsqnlbzlfdjvmnlhccpzmvpmrnttnshdjsswjlbtpwdwgmzqcthbczngwnfpzbmmrdffqsbrmsgzrtpsstfmdgbclwthflfbzvtptdfpzznvdwncqzvjwsmczwcnwgjpffcbhrtmtnbtjgcvtwdjtrftjwgvzmlfvgdjjjgsftzctplmjjmqfdzzwrtfmwqhwzglwbvsdvtgphsmngvppvlfdjdrzhhzsrvqgfwjbqdqlrwbgdmrglzrchvgwlhhwbvhfszntbrhshvqdznfvngdmhctjnlfhsmchqbqhdtmlntsnpvdzrvwjcjflfqgnprcpscfcmlgbwzmbnfdfnbwngrrbpnvbcdfgcpgtwmtbzptsdvjhwnzpsffglnqlczgsrdzshrfpqtqbmsrgzwwjvqhzjfzldcggvfhtcvzsgfspnlgtjfglwcnbprvssdfbtzqbblzjzmtftfcfprlwsvswjvtpzcpfphvmdnbczzjbjjrpwrncdszrtqjvznvgzcwdvpfvfcqlsdmhsswpnfsvtffnjhstcznwghlpmmqbnhqtddbjdrpvfhgdwjcnfgggmwnqhmsvgzsssbfcfrmbwpfqhrmtdvhbpwzggdvfjnlrgmvjjbqhjmbvszfzdcwrcjhfdczbhmcrwngmrgrldvbjjdgddhbbvqvwztfstfzqnqwvmmdzhzqtrmnqfrhmtdfhrgfqclpqdwthrbgsprccwcsvdbnclglgflhtqstvpwrmnsvflpplrgftlvjwttmdcqwjnbttjqqlwsntplmfrncqzplwgrjpzljtmnwsqfqnzgnrbtscbfzqwnqttnghcgl`;

export default input;