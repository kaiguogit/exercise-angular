System.register([], function(exports_1) {
    var AuthorService;
    return {
        setters:[],
        execute: function() {
            AuthorService = (function () {
                function AuthorService() {
                }
                AuthorService.prototype.getAuthors = function () {
                    return ["author1", "author2", "author3"];
                };
                return AuthorService;
            })();
            exports_1("AuthorService", AuthorService);
        }
    }
});
//# sourceMappingURL=author.service.js.map