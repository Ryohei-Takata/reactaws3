import React from "react";

const moshikomi = (props) => {
  const id = props.match.params.id;
  const idenc = btoa(id);
  const isAuthenticated = false;
  return (
    // <div>
    //   <div>
    //     moshikomi page:{id} enc:{idenc}
    //   </div>
    //   <div class="flex justify-center">
    //     <div>
    //       <div class="form-check">
    //         <input
    //           class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
    //           type="checkbox"
    //           value=""
    //           id="flexCheckDefault"
    //         />
    //         <label
    //           class="form-check-label inline-block text-gray-800"
    //           for="flexCheckDefault"
    //         >
    //           Default checkbox
    //         </label>
    //       </div>
    //       <div class="form-check">
    //         <input
    //           class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
    //           type="checkbox"
    //           value=""
    //           id="flexCheckChecked"
    //           checked
    //         />
    //         <label
    //           class="form-check-label inline-block text-gray-800"
    //           for="flexCheckChecked"
    //         >
    //           Checked checkbox
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div class="">
      <div class="p-8 lg:w-1/2 mx-auto">
        <div class="bg-white rounded-t-lg p-8">
          <p class="text-center text-sm text-gray-400 font-light">
            申し込みmoshikomi page:{id}
          </p>
        </div>
        <div class="bg-red-50 border-b border-red-400 text-red-800 text-sm p-4 flex justify-between">
          <div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>
                <span class="font-bold">Info:</span>
                すでに申し込み済みです。
              </p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div class="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
          <p class="text-center text-sm text-gray-500 font-light">
            以下、確認事項をチェックの上、ご著名をお願いします。
          </p>
          <form class="mt-6">
            <div class="mt-4 flex items-center text-gray-500">
              <input
                type="checkbox"
                id="remember"
                name="remember1"
                class="mr-3"
              />
              <label for="remember1">
                「個人情報の取り扱いについて」の内容に同意します。
              </label>
            </div>
            <div class="mt-4 flex items-center text-gray-500">
              <input
                type="checkbox"
                id="remember2"
                name="remember2"
                class="mr-3"
              />
              <label for="remember2">以下書面の内容を確認しました。</label>
              <p class="text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
            <ur>
              <div class="mt-4 flex items-center text-gray-500">
                <input
                  type="checkbox"
                  id="remember3"
                  name="remember3"
                  class="mr-3"
                />
                <label for="remember3">
                  「学習指導申込書」、「学習指導。。。」を確認しました。
                </label>
              </div>
              <li class="text-gray-500">aaa</li>
              <li class="text-gray-500">bbb</li>
            </ur>
            <div class="flex items-center justify-center mt-8">
              <button
                disabled={!isAuthenticated}
                class="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                申し込み
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default moshikomi;
