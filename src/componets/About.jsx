import React from 'react';
import Header from './Header';

const AboutPage = () => {
    return (
        <div className='box'>
            <Header />
            <main>
                <div class="main-box">
                    <div class="inner">
                        <div class="header-title">
                            <h1>About..</h1>
                            <p>自己紹介</p>
                        </div>
                        <div class="main-content">
                            <div class="main-left">
                                <div class="my-img">
                                    <img loading="lazy" src="./images/1643869900320.jpg" alt=""></img>
                                </div>
                                <div class="myself">
                                    <div class="my-title">
                                        <h3>麻生 大翔<br></br><span>Aso Hiroto</span></h3>
                                    </div>
                                    <div class="my-info">
                                        <dl>
                                            <dt>生年月日</dt>
                                            <dd>2000/12/06</dd>
                                        </dl>
                                        <dl>
                                            <dt>出生地</dt>
                                            <dd>北海道北見市</dd>
                                        </dl>
                                        <dl>
                                            <dt>現住所</dt>
                                            <dd>北海道札幌市</dd>
                                        </dl>
                                        <dl>
                                            <dt>連絡先</dt>
                                            <dd>ahiroto1234@gmail.com</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="main-right">
                                <div class="skill">
                                    <div class="skill-title">
                                        <h3>スキルセット</h3>
                                    </div>
                                    <div class="skill-culm">
                                        <div class="wrapper">
                                            <ul class="tab">
                                                <li class="target"><a href="#html"><img
                                                    src="./images/html-icon.png" alt=""></img></a></li>
                                                <li class="target"><a href="#css"><img
                                                    src="./images/css-icon.png" alt=""></img></a></li>
                                                <li class="target"><a href="#javascript"><img
                                                    src="./images/js-icon.png" alt=""></img></a>
                                                </li>
                                                <li class="target"><a href="#jquery"><img
                                                    src="./images/jquery-icon.png" alt=""></img></a>
                                                </li>
                                                <li class="target"><a href="#wordpress"><img
                                                    src="./images/wordpress-icon.png" alt=""></img></a>
                                                </li>
                                            </ul>

                                            <div id="html" class="area">
                                                <h2>
                                                    ★★★★☆<br></br>
                                                    W3C標準準拠したコーディングを心がけています
                                                </h2>
                                                <p>
                                                    実装したいことを実現するためにW3C標準から
                                                    外れてしまうこともありますし、
                                                    jQueryを導入している場合は、
                                                    その仕様上W3C標準に準拠できない
                                                    可能性もありますが、できる限り検索エンジンの最適化（SEO）・
                                                    アクセシビリティの向上・
                                                    データ軽量化による読み込み時間短縮・
                                                    メンテナンス性の向上等に努めるべく丁寧なコーディングを
                                                    心がけております。
                                                </p>
                                            </div>
                                            <div id="css" class="area">
                                                <h2>
                                                    ★★★★☆<br></br>
                                                    SCSSの使用経験あり
                                                </h2>
                                                <p>
                                                    CSSにおけるコーディングとして
                                                    カンプを見た瞬間にある構造を把握し、
                                                    どのように書けばよいのかがある程度浮かんできて
                                                    それをコーディングするのが得意です。
                                                    様々なプロパティへの理解も比較的高いです。
                                                    デザイン崩れの修正なども得意で検証ツールを用いて
                                                    一人で解決し続けてきました。HTMLの欄ではW3C標準に準拠すると記載しましたが、
                                                    CSS設計に関しては未就学です。就業先の命名規則に準拠いたします。
                                                </p>
                                            </div>
                                            <div id="javascript" class="area">
                                                <h2>
                                                    ★★★☆☆<br></br>
                                                    アプリケーションの制作経験がある
                                                </h2>
                                                <p>
                                                    Webサイトを作るうえではあまりバニラのJSというのは
                                                    触る機会が無かったのですが、将来的にフロントエンドエンジニアとして
                                                    活躍したいと思ったときに必須な言語となると思ったので訓練校に通っている期間に
                                                    独学で学びました。DOM操作や配列処理、ローカルストレージ、JSONなど最低限ではありますが
                                                    自らで１からTodoアプリの制作を行いました。
                                                </p>
                                            </div>
                                            <div id="jquery" class="area">
                                                <h2>
                                                    ★★★★☆<br></br>
                                                    複雑なものでなければ一人で１から書くことができます
                                                </h2>
                                                <p>
                                                    コピー＆ペーストに甘んじるのではなく
                                                    しっかりと仕組みを理解し、１から自分で書けるように
                                                    自ら気を付けながら勉強してきました。
                                                    １から書けるということはカスタマイズする際の
                                                    自由度も広がりますし、修正力も桁違いになるかなと考えた結果です。
                                                    何より思い通りの動きを実装できたほうがやりがいを感じ、
                                                    その過程や修正がまた楽しいからです。
                                                    コードを見てその意味を把握する力には自信があります。
                                                    様々なライブラリの使用経験などもあります。
                                                </p>
                                            </div>
                                            <div id="wordpress" class="area">
                                                <h2>
                                                    ★★★☆☆<br></br>
                                                    既存のサイトをWordpress化できます。
                                                </h2>
                                                <p>
                                                    簡単なカスタマイズやテンプレートの追加、
                                                    既存のサイトのWordpress化等の初歩的な
                                                    知識については持ち合わせおります。
                                                    カスタム投稿テーマの追加や、テンプレートタグを用いた
                                                    コード側からのカスタムも多少できます。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="history">
                                    <div class="history-title">
                                        <h3>略歴</h3>
                                    </div>
                                    <div class="history-culm">
                                        <p>
                                            北見北斗高校卒業後、地元の北海道を飛び出し
                                            各地をホテルや旅館の仕事をしながら回っていたが
                                            コロナを機に失業。その際何のスキルもない人間が
                                            簡単に仕事を失う恐ろしさを知り
                                            スキルを用いた様々な仕事を
                                            調べていく中でプログラミングと出会った。
                                            現在はWEB制作会社に入社するため
                                            職業訓練校に通い勉強中。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AboutPage;