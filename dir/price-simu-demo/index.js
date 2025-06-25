(() => {

    const $doc = document;
    const $selectedArea = $doc.getElementById('js__selected');
    const $selectedImage = $doc.getElementById('js__selectedImage');
    const $selectedPrice = $doc.getElementById('js__selectedPrice');
    const $resArea = $doc.getElementById('js__resArea');
    const $style = $doc.getElementById('js__style');
    const $bord = $doc.getElementById('js__bord');
    const $color = $doc.getElementById('js__color');
    const $motor = $doc.getElementById('js__motor');
    const $mattress = $doc.getElementById('js__mattress');
    const $switch = $doc.getElementById('js__switch');
    const windWith = window.innerWidth;
    const allAreas = [$style,$bord,$color,$motor,$mattress,$switch];
    let bedStyle = null;
    let bord = null;
    let color  = null;
    let motor = '1+1';
    let mattress = 'lite';
    let switchType = 'a';
    let selectedInfo = [];
    let price = 206000;

    const selected = (selectedInfo,$selectedArea) => {
        $selectedArea.innerHTML = '';
        selectedInfo.forEach(type => {
            const addLi = $doc.createElement('li');
            addLi.innerText = type;
            $selectedArea.appendChild(addLi);
        })
    };

    const init = () => {

        bedStyle = '5';
        bord = 'c';
        color = 'a';

        selectedInfo = [
            'ハリウッド',
            'キューブ',
            'ナチュラル オーク',
            '1+1モーター',
            'カルムライト',
            'Aタイプ',
        ];

        $selectedImage.classList.add('active');
        // 初期選択
        allAreas.forEach(cat => {
            const allLi = cat.querySelectorAll('li');
            allLi[0].classList.add('active')
        });

        selected(selectedInfo,$selectedArea);

        const addImg = $doc.createElement('img');
        addImg.src = 'img/S/5ca.jpg';
        $selectedImage.appendChild(addImg);

        const addPrice = $doc.createElement('p');
        addPrice.innerText = price;
        $selectedPrice.appendChild(addPrice);

        // スマホ用PR
        if (windWith > 600) {
            $resArea.classList.add('active');
        } else {
            $resArea.classList.remove('active');
        }
    }
    init();

    // セレクトボタンを押下すると発火
    allAreas.forEach((cat,index) => {
        cat.addEventListener('click',(e) => {
            if ( e.target.tagName === 'LI') {

                let allLi = cat.querySelectorAll('li');
                allLi.forEach(list => {
                    list.classList.remove('active');
                });

                // 押下したli要素の名前を取得
                const selectedName = e.target.innerText;

                // 選択した条件エリア更新
                if (index === 0) {
                    selectedInfo[0] = selectedName;
                } else if ( index === 1) {
                    selectedInfo[1] = selectedName;
                } else if ( index === 2) {
                    selectedInfo[2] = selectedName;
                } else if ( index === 3) {
                    selectedInfo[3] = selectedName;
                } else if ( index === 4) {
                    selectedInfo[4] = selectedName;
                } else if ( index === 5) {
                    selectedInfo[5] = selectedName;
                }

                selected(selectedInfo,$selectedArea);


                // 選択した条件へ追加
                
                // ボタンのアクティブ化
                e.target.classList.add('active');
                
                // アクティブリストの番号を出力
                allLi = cat.querySelectorAll('li');
                allLi.forEach(list => {
                    if(list.classList.contains('active')){
                        const selectedVal = list.getAttribute('data-value');
                        if (index === 0) {
                            bedStyle = selectedVal;
                        } else if ( index === 1) {
                            bord = selectedVal;
                        } else if ( index === 2) {
                            color = selectedVal;
                        } else if ( index === 3) {
                            motor = selectedVal;
                        } else if ( index === 4) {
                            mattress = selectedVal;
                        } else if ( index === 5) {
                            switchType = selectedVal;
                        }
                    }
                });

                // 個体識別番号を作り、その画像を表示する
                const mngNum = bedStyle + bord + color;
                const url = 'img/S/' + mngNum + '.jpg';
                const addImg = $doc.createElement('img');
                addImg.src = url;
                addImg.style.opacity = 0;
                $selectedImage.innerHTML = '';
                $selectedImage.appendChild(addImg);
                
                // 価格計算
                price = 206000; //この値段を基準にして考える
                // モーター、ボードタイプ、ベッドスタイルが依存関係にあるので、先に計算する
                if ( motor === '1+1' ) {
                    if ( bedStyle === '5' ) {
                        if ( bord === 'r' ) {
                            price += 20000;
                        } else if ( bord === 's' ) {
                            price -= 32000;
                        }
                    } else if ( bedStyle === '6' ) {
                        if ( bord === 'c' ) {
                            price += 20000;
                        } else if ( bord === 'r' ) {
                            price += 50000;
                        } else if ( bord === 's' ) {
                            price -= 10000;
                        }
                    }
                } else if ( motor === '3' ) {
                    if ( bedStyle === '5' ) {
                        if ( bord === 'c' ) {
                            price += 58000;
                        } else if ( bord === 'r' ) {
                            price += 78000;
                        } else if ( bord === 's' ) {
                            price += 28000;
                        }
                    } else if ( bedStyle === '6' ) {
                        if ( bord === 'c' ) {
                            price += 78000;
                        } else if ( bord === 'r' ) {
                            price += 108000;
                        } else if ( bord === 's' ) {
                            price += 48000;
                        }
                    }
                }
                // マットレスタイプの計算
                if ( mattress === 'core' ) {
                    price += 18000;
                } else if ( mattress === 'advance' ) {
                    price += 52000;
                } else if ( mattress === 'graiks' ) {
                    price += 80000;
                }

                // 価格表示
                const addPrice = $doc.createElement('p');
                addPrice.innerText = price;
                $selectedPrice.innerHTML = '';
                $selectedPrice.appendChild(addPrice);

                // フェードイン効果
                const interval = 20; // ミリ秒
                let opacity = 0;

                const fadeIn = () => {
                    if (opacity < 1) {
                        opacity += 0.05; // 不透明度を増加させる値（0.05など、適切な値を調整）
                        addImg.style.opacity = opacity;
                        setTimeout(fadeIn, interval);
                    }    
                }
                fadeIn();
            }
        })
    });

    window.addEventListener('scroll', () => {
        if ( window.scrollY > 0) {
            $resArea.classList.add('active');
        }
    })

    window.addEventListener('resize', () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 600) {
            $resArea.classList.add('active');
        } else {
            $resArea.classList.remove('active');
        }
    })



})();