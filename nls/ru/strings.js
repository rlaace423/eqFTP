define({
    "ERR_LOADING" : "Загрузка не удалась :(",
    
    "SIDEPANEL_TITLE" : "eqFTP",
    "SIDEPANEL_OPENCONNMANGR" : "Открыть менеджер соединений",
    "SIDEPANEL_FILETREE_NAME" : "Имя",
    "SIDEPANEL_FILETREE_SIZE" : "Размер",
    "SIDEPANEL_FILETREE_TYPE" : "Тип",
    "SIDEPANEL_FILETREE_MODIFIED" : "Дата изменения",
    "SIDEPANEL_CONDISCONNECT" : "(От)соединиться",
    "SIDEPANEL_REFRESH" : "Обновить",
    "SIDEPANEL_RELOADSETTINGS" : "Перезагрузить настройки и ввести заново пароль",

    "ERR_DIAG_SERVNOEXIST_TITLE" : "Сервер не существует",
    "ERR_DIAG_SERVNOEXIST_CONTENT" : "Похоже, что такого сервера не существует.<br>Проверьте поле Сервер в настройках соединения.",
    "ERR_DIAG_SERVCANTREACH_TITLE" : "Не подключиться к серверу",
    "ERR_DIAG_SERVCANTREACH_CONTENT" : "Я просто не могу достать до сервера.<br>Может у вас Файервол мешает.",
    "ERR_DIAG_AUTHORIZEERR_TITLE" : "Неверные данные авторизации",
    "ERR_DIAG_AUTHORIZEERR_CONTENT" : "Я не могу авторизоваться с теми логином и паролем, которые вы мне дали.<br>Пожалуйста проверьте их.",
    
    "PASSWDWIND_TITLE" : "Введите пароль",
    "PASSWDWIND_CONTENT" : "Введите пароль к eqFTP:",
    
    "SETTINGSWIND_TITLE" : "Менеджер соединений eqFTP",
    "SETTINGSWIND_ERR_BLANKS" : "Оу! Кажется, что-то пошло не так. Проверьте поля ввода и попробуйте снова.",
    "SETTINGSWIND_ERR_CANTWRITE" : "Что-то пошло совсем не так! Я не могу записать настройки в файл!",
    "SETTINGSWIND_NOTIF_DONE" : "Все сохранено! :)",
    "SETTINGSWIND_SAVEDCONN" : "Сохраненные FTP соединения",
    "SETTINGSWIND_DELETECONN_HOVER" : "Удалить это соединение",
    "SETTINGSWIND_ADDCONN_HOVER" : "Добавить новое соединение",
    "SETTINGSWIND_ADDCONN_STRING" : "Создать новое соединение...",
    // Those 2 strings below are going like this: SETTINGSWIND_DELETECONNCONF_1 + VAL + SETTINGSWIND_DELETECONNCONF_2
    // So if in your language there's no need in 2 strings, just leave one of them blank
    "SETTINGSWIND_DELETECONNCONF_1" : "Подтвердите удаление соединения ",
    "SETTINGSWIND_DELETECONNCONF_2" : ".",
    "SETTINGSWIND_OPENGLOBSET" : "Открыть общие настройки eqFTP...",
    "SETTINGSWIND_NOTHINGYETMSG" : "Выберите соединение для редактирования в панели слева или создайте новое.",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ" : "Папка проектов:",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ_DIAGTITLE" : "Папка с проектами, куда будут сохраняться загруженные файлы:",
    "SETTINGSWIND_GLOB_FOLDERFORSET" : "Папка настроек:",
    "SETTINGSWIND_GLOB_FOLDERFORSET_DIAGTITLE" : "Папка, куда будет сохраняться файл с настройками",
    "SETTINGSWIND_GLOB_DONTOPENPROJECTS" : "Не открыть проекты после загрузки файлов",
    "SETTINGSWIND_GLOB_STORESAFELY" : "Сохранять пароли зашифрованно",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_TITLE" : "Название соединения:",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_FIELD" : "Введите имя соединения",
    "SETTINGSWIND_GLOB_SERVER_TITLE" : "Сервер:",
    "SETTINGSWIND_GLOB_PROTOCOL_TITLE" : "Тип протокола:",
    "SETTINGSWIND_GLOB_USERNAME_TITLE" : "Имя пользователя:",
    "SETTINGSWIND_GLOB_USERNAME_FIELD" : "Имя FTP пользователя",
    "SETTINGSWIND_GLOB_PASSWORD_TITLE" : "Пароль:",
    "SETTINGSWIND_GLOB_PASSWORD_FIELD" : "Пароль к FTP",
    "SETTINGSWIND_GLOB_REMOTEPATH_TITLE" : "Удаленный путь:",
    "SETTINGSWIND_GLOB_REMOTEPATH_FIELD" : "Введите путь, который будет открываться по умолчанию",
    "SETTINGSWIND_GLOB_LOCALPATH_TITLE" : "Путь к проекту на ПК:",
    "SETTINGSWIND_GLOB_LOCALPATH_FIELD" : "Если оставить пустым, создает новую папку в стандартном месте",
    "SETTINGSWIND_GLOB_UPLOADONSAVE" : "Загружать файлы после сохранения",
    "SETTINGSWIND_GLOB_EVENDISCONN" : "Даже, если не подключен к FTP",
    "SETTINGSWIND_GLOB_EVENDISCONN_EXPLAIN" : "Эта опция дает вам возможность загружать только что сохраненные файлы, если этот файл находится в проекте, который был создан или связан с FTP соединением, или если этот файл был загружен с FTP. Надеюсь, я нормально объяснил..",
    
    "QUEUE_TITLE" : "eqFTP очередь",
    "QUEUE_TITLE_HOVER" : "Нажмите, чтобы открыть eqFTP очередь",
    "QUEUE_HEADER_NAME" : "Имя",
    "QUEUE_HEADER_PATH" : "Путь",
    "QUEUE_HEADER_STATUS" : "Статус",
    "QUEUE_CONTEXTM_STARTQ" : "Запустить задание",
    "QUEUE_CONTEXTM_PAUSEQ" : "Приостановить",
    "QUEUE_CONTEXTM_CLEARQ" : "Очистить очередь",
    "QUEUE_CONTEXTM_CLEARCOMPQ" : "Очистить завершенные задания",
    "QUEUE_CONTEXTM_CLEARFAILQ" : "Очистить неудавшиеся задания",
    "QUEUE_CONTEXTM_RESTARTFAILQ" : "Перезапустить неудавшиеся задания",
    "ERR_FILE_ACCESSDENIED" : "Доступ запрещен. Проверьте доступ к файлу.",
    "ERR_FILE_AUTHORIZATION" : "Ошибка авторизации. Проверьте логин и пароль.",
    "ERR_FILE_SERVNOEXIST" : "Сервер не существует. Может, вы опечатались.",
    "ERR_FILE_SERVCANTREACH" : "Не могу подключиться к серверу. Проверьте Файервол.",
    
    "CONTEXTM_DOWNLOAD" : "Загрузить с FTP",
    "CONTEXTM_UPLOAD" : "Загрузить на FTP",
    "CONTEXTM_ADDQUEUE" : "Добавить в очередь",
    "CONTEXTM_OPEN" : "Открыть",
    
    "OTHER_SELECT_SERVER_DROPDOWN" : "Выберите сервер для подключения...",
    "OTHER_ERROR" : "Ошибка",
    "OTHER_PAUSED" : "Приостановлено",
    "OTHER_COMPLETED" : "Завершено",
    "OTHER_WAITING" : "Ожидание",
    "OTHER_OK" : "Ок",
    "OTHER_CANCEL" : "Отмена",
    "OTHER_APPLY" : "Применить",
    "OTHER_CLOSE" : "Закрыть",
});